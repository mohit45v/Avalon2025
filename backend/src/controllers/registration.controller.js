import Registration from '../models/registration.model.js';

import { uploadOnCloudinary } from '../utils/cloudsetup.js';
import { sendEmail } from '../utils/sendEmail.js';

const registration = async (req, res) => {
    try {
        const { teamMembers, collegeName, collegeAddress, competition, workshop, transactionId } = req.body;

        // Parse teamMembers if it's a string (from FormData)
        const parsedTeamMembers = typeof teamMembers === 'string' ? JSON.parse(teamMembers) : teamMembers;

        // Validate required fields
        if (!parsedTeamMembers || !collegeName || !collegeAddress || !competition || !transactionId || !req.file) {
            return res.status(400).json({ message: 'All required fields must be provided' });
        }

        // Check if team leader (first member) is already registered
        const existingRegistration = await Registration.findOne({
            'teamMembers.email': parsedTeamMembers[0].email
        });

        if (existingRegistration) {
            return res.status(409).json({ message: 'Team leader is already registered' });
        }

        // Upload payment screenshot
        const file = req.file.path;
        const path = await uploadOnCloudinary(file);

        if (!path?.url) {
            throw new Error("Failed to upload payment screenshot");
        }

        // Create new registration
        const newRegistration = new Registration({
            teamMembers: parsedTeamMembers,
            collegeName,
            collegeAddress,
            competition,
            workshop: workshop || '', // Make workshop optional
            transactionId,
            paymentScreenshot: path.url
        });

        await newRegistration.save();

        // Send confirmation email to team leader
        const teamLeader = parsedTeamMembers[0];
        const subject = "Techfest Registration Confirmation";
        const text = `Hello ${teamLeader.name},

Thank you for registering for Avalon 2025!

Registration Details:
- Competition: ${competition}
${workshop ? `- Workshop: ${workshop}` : ''}
- College: ${collegeName}
- Transaction ID: ${transactionId}

Your team members:
${parsedTeamMembers.map(member => `- ${member.name} (${member.email})`).join('\n')}

Your payment has been received successfully.

See you at the event! 🎉`;

        await sendEmail(teamLeader.email, subject, text);

        res.status(201).json({ message: 'Registration successful! Confirmation email sent.' });

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const getAllRegistrations = async (req, res) => {
    try {
        const registrations = await Registration.find().sort({ createdAt: -1 });
        res.status(200).json(registrations);
    } catch (error) {
        console.error("Error fetching registrations:", error);
        res.status(500).json({ message: "Server error" });
    }
};

const sendRegistrationEmail = async (req, res) => {
    const { registrationId } = req.params;

    try {
        const registration = await Registration.findById(registrationId);

        if (!registration) {
            return res.status(404).json({ message: "Registration not found" });
        }

        const teamLeader = registration.teamMembers[0];
        const subject = "Avalon 2025 - Registration Update";
        const text = `Hello ${teamLeader.name},

This is a follow-up email regarding your registration for Avalon 2025.

Event Details:
- Competition: ${registration.competition}
${registration.workshop ? `- Workshop: ${registration.workshop}` : ''}
- College: ${registration.collegeName}

Your team:
${registration.teamMembers.map(member => `- ${member.name} (${member.email})`).join('\n')}

We look forward to seeing you at the event!`;

        const emailSent = await sendEmail(teamLeader.email, subject, text);

        if (emailSent) {
            return res.status(200).json({ message: "Email sent successfully" });
        } else {
            return res.status(500).json({ message: "Email sending failed" });
        }
    } catch (error) {
        console.error("Email sending error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const register = registration;
export { getAllRegistrations, sendRegistrationEmail };

