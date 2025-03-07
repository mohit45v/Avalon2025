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
        const totalQueries = await Query.countDocuments();
        const pendingQueries = await Query.countDocuments({ status: 'Pending' });
        const solvedQueries = await Query.countDocuments({ status: 'Replied' });

        res.status(200).json({
            totalRegistrations,
            verifiedParticipants,
            pendingReview,
            totalQueries,
            pendingQueries,
            solvedQueries
        });
    } catch (error) {
        console.error("Dashboard stats error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch dashboard statistics"
        });
    }
};

const verifyParticipant = async (req, res) => {
    try {
        const { id } = req.params;
        const participant = await Registration.findByIdAndUpdate(
            id,
            { status: 'verified' },
            { new: true }
        );

        if (!participant) {
            return res.status(404).json({ message: 'Participant not found' });
        }

        // Enhanced verification email template
        await sendEmail(
            participant.teamMembers[0].email,
            'Registration Verified - Avalon 2025',
            {
                text: `Congratulations! Your registration for ${participant.competition} has been verified.`,
                html: `
                    <div style="background-color: #030014; color: #ffffff; padding: 20px; font-family: Arial, sans-serif; border-radius: 10px; max-width: 600px; margin: 0 auto;">
                        <div style="text-align: center; margin-bottom: 30px;">
                            <img src="https://avalontechfest.in/logo.png" alt="Avalon Logo" style="width: 150px; margin-bottom: 20px;">
                            <h1 style="color: #a855f7; margin: 0;">Registration Verified!</h1>
                        </div>
                        
                        <div style="background-color: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                            <h2 style="color: #f97316; margin-top: 0;">Hello ${participant.teamMembers[0].name},</h2>
                            <p style="font-size: 16px; line-height: 1.5;">Congratulations! Your registration for <span style="color: #a855f7; font-weight: bold;">${participant.competition}</span> has been successfully verified.</p>
                            
                            <div style="margin: 20px 0; padding: 15px; background-color: rgba(168, 85, 247, 0.1); border-radius: 8px;">
                                <h3 style="color: #f97316; margin-top: 0;">Event Details:</h3>
                                <ul style="list-style: none; padding: 0;">
                                    <li style="margin-bottom: 10px;">🏆 Event: ${participant.competition}</li>
                                    <li style="margin-bottom: 10px;">📍 Venue: Terna Engineering College, Nerul</li>
                                    <li style="margin-bottom: 10px;">📅 Date: March 15-17, 2025</li>
                                </ul>
                            </div>
                        </div>

                        <div style="text-align: center; margin-top: 30px;">
                            <p style="color: #a855f7;">Follow us for updates:</p>
                            <div style="margin-top: 15px;">
                                <a href="https://instagram.com/avalonterna" style="color: #f97316; text-decoration: none; margin: 0 10px;">Instagram</a>
                                <a href="https://x.com/avalon_tec" style="color: #f97316; text-decoration: none; margin: 0 10px;">Twitter</a>
                                <a href="https://youtube.com/@avalontechfest8898" style="color: #f97316; text-decoration: none; margin: 0 10px;">YouTube</a>
                            </div>
                        </div>

                        <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #666;">
                            <p>© 2025 Avalon TechFest. All rights reserved.</p>
                        </div>
                    </div>
                `
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

        // Enhanced rejection email template
        await sendEmail(
            participant.teamMembers[0].email,
            'Registration Update Required - Avalon 2025',
            {
                text: `Your registration for ${participant.competition} needs attention. Please check your details and resubmit.`,
                html: `
                    <div style="background-color: #030014; color: #ffffff; padding: 20px; font-family: Arial, sans-serif; border-radius: 10px; max-width: 600px; margin: 0 auto;">
                        <div style="text-align: center; margin-bottom: 30px;">
                            <img src="https://avalontechfest.in/logo.png" alt="Avalon Logo" style="width: 150px; margin-bottom: 20px;">
                            <h1 style="color: #a855f7; margin: 0;">Registration Update Required</h1>
                        </div>
                        
                        <div style="background-color: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                            <h2 style="color: #f97316; margin-top: 0;">Hello ${participant.teamMembers[0].name},</h2>
                            <p style="font-size: 16px; line-height: 1.5;">We noticed some issues with your registration for <span style="color: #a855f7; font-weight: bold;">${participant.competition}</span>.</p>
                            
                            <div style="margin: 20px 0; padding: 15px; background-color: rgba(239, 68, 68, 0.1); border-radius: 8px;">
                                <h3 style="color: #f97316; margin-top: 0;">Required Actions:</h3>
                                <ul style="list-style: none; padding: 0;">
                                    <li style="margin-bottom: 10px;">📝 Review your registration details</li>
                                    <li style="margin-bottom: 10px;">🔍 Verify your payment information</li>
                                    <li style="margin-bottom: 10px;">📤 Resubmit your registration</li>
                                </ul>
                            </div>

                            <p style="margin-top: 20px;">For any queries, please contact:</p>
                            <p style="color: #a855f7;">avalon@ternaengg.ac.in</p>
                        </div>

                        <div style="text-align: center; margin-top: 30px;">
                            <p style="color: #a855f7;">Follow us for updates:</p>
                            <div style="margin-top: 15px;">
                                <a href="https://instagram.com/avalonterna" style="color: #f97316; text-decoration: none; margin: 0 10px;">Instagram</a>
                                <a href="https://x.com/avalon_tec" style="color: #f97316; text-decoration: none; margin: 0 10px;">Twitter</a>
                                <a href="https://youtube.com/@avalontechfest8898" style="color: #f97316; text-decoration: none; margin: 0 10px;">YouTube</a>
                            </div>
                        </div>

                        <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #666;">
                            <p>© 2025 Avalon TechFest. All rights reserved.</p>
                        </div>
                    </div>
                `
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