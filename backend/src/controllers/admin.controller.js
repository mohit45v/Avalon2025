import Admin from "../models/admin.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Registration from "../models/registration.model.js";
import Query from "../models/query.model.js";
import { sendEmail } from "../utils/sendEmail.js";

dotenv.config();

const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Login attempt for:", email);

        // Find admin
        const admin = await Admin.findOne({ email });
        console.log("Admin found:", admin ? "Yes" : "No");

        if (!admin) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Check password
        const isValid = await bcrypt.compare(password, admin.password);
        console.log("Password valid:", isValid ? "Yes" : "No");

        if (!isValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate token
        const token = jwt.sign(
            { id: admin._id, role: admin.role },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            success: true,
            token,
            role: admin.role
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const getDashboardStats = async (req, res) => {
    try {
        // Get counts from your database
        const totalRegistrations = await Registration.countDocuments();
        const verifiedParticipants = await Registration.countDocuments({ status: 'verified' });
        const pendingReview = await Registration.countDocuments({ status: 'pending' });
        const activeQueries = await Query.countDocuments({ status: 'active' });

        res.status(200).json({
            totalRegistrations,
            verifiedParticipants,
            pendingReview,
            activeQueries
        });
    } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        res.status(500).json({ message: 'Error fetching dashboard statistics' });
    }
};

const verifyParticipant = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('Verifying participant:', id);

        const participant = await Registration.findByIdAndUpdate(
            id,
            { status: 'verified' },
            { new: true }
        );

        console.log('Updated participant:', participant);

        if (!participant) {
            return res.status(404).json({ message: 'Participant not found' });
        }

        // Send verification email
        await sendEmail(
            participant.teamMembers[0].email,
            'Registration Verified',
            {
                text: `Congratulations! Your registration for ${participant.competition} has been verified.`,
                html: `<div style="font-family: Arial, sans-serif;">
                    <h2>Registration Verified</h2>
                    <p>Congratulations! Your registration for ${participant.competition} has been verified.</p>
                </div>`
            }
        );

        res.status(200).json({ message: 'Participant verified successfully', participant });
    } catch (error) {
        console.error('Error verifying participant:', error);
        res.status(500).json({ message: 'Error verifying participant' });
    }
};

const rejectParticipant = async (req, res) => {
    try {
        const { id } = req.params;
        const participant = await Registration.findByIdAndUpdate(
            id,
            { status: 'rejected' },
            { new: true }
        );

        if (!participant) {
            return res.status(404).json({ message: 'Participant not found' });
        }

        await sendEmail(
            participant.teamMembers[0].email,
            'Registration Update Required',
            {
                text: `Your registration for ${participant.competition} needs attention. Please check your details and resubmit.`,
                html: `<div style="font-family: Arial, sans-serif;">
                    <h2>Registration Update Required</h2>
                    <p>Your registration for ${participant.competition} needs attention. Please check your details and resubmit.</p>
                </div>`
            }
        );

        res.status(200).json({ message: 'Participant rejected successfully', participant });
    } catch (error) {
        console.error('Error rejecting participant:', error);
        res.status(500).json({ message: 'Error rejecting participant' });
    }
};

const markForReview = async (req, res) => {
    try {
        const { id } = req.params;
        const participant = await Registration.findByIdAndUpdate(
            id,
            { markedForReview: true },
            { new: true }
        );

        if (!participant) {
            return res.status(404).json({ message: 'Participant not found' });
        }

        res.status(200).json({ message: 'Marked for review successfully', participant });
    } catch (error) {
        console.error('Error marking for review:', error);
        res.status(500).json({ message: 'Error marking for review' });
    }
};

const sendEmailToParticipant = async (req, res) => {
    try {
        const { id } = req.params;
        const participant = await Registration.findById(id);

        if (!participant) {
            return res.status(404).json({ message: 'Participant not found' });
        }

        await sendEmail(
            participant.teamMembers[0].email,
            'Registration Update',
            {
                text: `Thank you for registering for ${participant.competition}. We're reviewing your application.`,
                html: `<div style="font-family: Arial, sans-serif;">
                    <h2>Registration Update</h2>
                    <p>Thank you for registering for ${participant.competition}. We're reviewing your application.</p>
                </div>`
            }
        );

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error sending email' });
    }
};

export {
    adminLogin,
    getDashboardStats,
    verifyParticipant,
    rejectParticipant,
    markForReview,
    sendEmailToParticipant
};