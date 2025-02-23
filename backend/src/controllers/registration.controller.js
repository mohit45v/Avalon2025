import Registration from '../models/registration.model.js';

import { uploadOnCloudinary } from '../utils/cloudsetup.js';
import { sendEmail } from '../utils/sendEmail.js';

const registration = async (req, res) => {
    try {
        // console.log('Incoming Request Body:', req.body);
        // console.log(req.file.path)
        const { name, email, mobileNo } = req.body;

        if (!name || !email || !mobileNo) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const existingUser = await Registration.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'User already registered' });
        }

        

        const file = req.file.path;
        const path = await uploadOnCloudinary(file);

        if (!path?.url) {
            throw new ApiError(500, "Failed to upload image ");
        }

        const newRegistration = new Registration({
            name,
            email,
            mobileNo,
            paymentScreenshot: path.url // Assuming you have a field for the uploaded image
        });

        await newRegistration.save();
        res.status(201).json({ message: 'User registered successfully!' });

    } catch (error) {
        console.error('Error details:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
        console.log(error.message)
    }
};




const getAllRegistrations = async (req, res) => {
    try {
        const registrations = await Registration.find();
        res.status(200).json(registrations);
    } catch (error) {
        console.error("❌ Error fetching registrations:", error);
        res.status(500).json({ message: "Server error" });
    }
};

 const sendRegistrationEmail = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await Registration.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const subject = "Techfest Registration Confirmation";
        const text = `Hello ${user.name},\n\nThank you for registering for Avalon 2025! Your payment has been received successfully.\n\nSee you at the event! 🎉`;

        const emailSent = await sendEmail(email, subject, text);

        if (emailSent) {
            return res.status(200).json({ message: "Email sent successfully" });
        } else {
            return res.status(500).json({ message: "Email sending failed" });
        }
    } catch (error) {
        console.error("❌ Email sending error:", error);
        res.status(500).json({ message: "Server error" });
    }
};


export const register = registration;
export { getAllRegistrations , sendRegistrationEmail};

