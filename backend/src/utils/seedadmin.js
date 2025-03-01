import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import Admin from "../models/admin.model.js"; // Import Admin model

dotenv.config();

// Add your MongoDB URI directly here (for testing purposes)
// const MONGODB_URI = "mongodb+srv://avalon:avalon2025@avalon.e7cag.mongodb.net/?retryWrites=true&w=majority&appName=Avalon";

async function seedAdmins() {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("🔗 Connected to MongoDB...");

        // First, let's check if admins already exist
        const existingAdmins = await Admin.find({});
        console.log("Existing admins:", existingAdmins);

        // Clear existing admins
        await Admin.deleteMany();
        console.log("🗑️ Existing admins removed...");

        // Hash passwords for each admin
        const sarthakPassword = await bcrypt.hash("sarthak@123", 10);
        const afrazPassword = await bcrypt.hash("afraz@123", 10);
        const mohitPassword = await bcrypt.hash("mohit@123", 10);

        // Create new admins
        const admins = await Admin.insertMany([
            { 
                email: "sarthakpawar275@gmail.com", 
                password: sarthakPassword, 
                role: "admin" 
            },
            { 
                email: "0afraz0khan7@gmail.com", 
                password: afrazPassword, 
                role: "admin" 
            },
            {
                email: "mohit.dhangar88@gmail.com",
                password: mohitPassword,
                role: "admin"
            }
        ]);

        console.log("✅ Admins seeded successfully!");
        console.log("Created admins:");
        admins.forEach((admin, index) => {
            console.log(`${index + 1}. Email: ${admin.email}, Role: ${admin.role}`);
        });

        // Verify the admins were created
        const verifyAdmins = await Admin.find({});
        console.log("\nVerifying created admins in database:");
        verifyAdmins.forEach(admin => {
            console.log(`Email: ${admin.email}, Role: ${admin.role}`);
        });

        mongoose.disconnect();
    } catch (error) {
        console.error("❌ Error seeding admins:", error);
        console.error("Error details:", error.message);
        mongoose.disconnect();
    }
}

seedAdmins();
