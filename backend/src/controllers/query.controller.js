import Query from "../models/query.model.js";
import { sendEmail } from "../utils/sendEmail.js";

const submitQuery = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const newQuery = await Query.create({
            name,
            email,
            message,
            status: 'Pending'
        });

        const htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #9333ea;">Query Received - Avalon 2025</h2>
                <p>Dear ${name},</p>
                <p>We have received your query and will get back to you shortly.</p>
                <p style="margin-top: 20px;">Best regards,<br>Avalon Team</p>
            </div>
        `;

        await sendEmail(
            email,
            "Query Received - Avalon 2025",
            {
                text: `Dear ${name},\n\nWe have received your query and will get back to you shortly.\n\nBest regards,\nAvalon Team`,
                html: htmlContent
            }
        );

        res.status(201).json({
            success: true,
            message: "Query submitted successfully"
        });
    } catch (error) {
        console.error("Query submission error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to submit query"
        });
    }
};

const getAllQueries = async (req, res) => {
    try {
        const queries = await Query.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            queries
        });
    } catch (error) {
        console.error("Fetch queries error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch queries"
        });
    }
};

const replyToQuery = async (req, res) => {
    try {
        const { id } = req.params;
        const { reply, emailTemplate } = req.body;

        const query = await Query.findById(id);
        if (!query) {
            return res.status(404).json({
                success: false,
                message: "Query not found"
            });
        }

        query.reply = reply;
        query.status = 'Replied';
        await query.save();

        await sendEmail(
            query.email,
            emailTemplate.subject,
            {
                text: reply,
                html: emailTemplate.html
            }
        );

        res.status(200).json({
            success: true,
            message: "Reply sent successfully"
        });
    } catch (error) {
        console.error("Reply to query error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to send reply"
        });
    }
};
// Add this to your existing controllers
const deleteQuery = async (req, res) => {
    try {
        const { id } = req.params;
        const query = await Query.findByIdAndDelete(id);
        
        if (!query) {
            return res.status(404).json({
                success: false,
                message: "Query not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Query deleted successfully"
        });
    } catch (error) {
        console.error("Delete query error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete query"
        });
    }
};

// Add deleteQuery to your exports
export { submitQuery, getAllQueries, replyToQuery, deleteQuery };