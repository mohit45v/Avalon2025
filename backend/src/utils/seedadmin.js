import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import Admin from "../models/admin.model.js"; // Import Admin model

dotenv.config();
console.log("🔍 MONGO_URI:", process.env.MONGODB_URI); // Debugging line

async function seedAdmins() {
    try {
        await mongoose.connect("", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("🔗 Connected to MongoDB...");

        // ❌ Fix: Use `Admin.deleteMany()`, not `deleteMany` directly
        await Admin.deleteMany();
        console.log("🗑️ Existing admins removed...");

        // Hash passwords before inserting
        const hashedPassword1 = await bcrypt.hash("admin@123", 10);
        const hashedPassword2 = await bcrypt.hash("superadmin@123", 10);

        // ❌ Fix: Use `Admin.insertMany()`, not `insertMany` directly
        await Admin.insertMany([
            { email: "admin@avalon.com", password: hashedPassword1, role: "admin" },
            { email: "superadmin@avalon.com", password: hashedPassword2, role: "superadmin" }
        ]);

        // console.log("✅ Admins seeded successfully!");
        mongoose.disconnect();
    } catch (error) {
        // console.error("❌ Error seeding admins:", error);
        mongoose.disconnect();
    }
}

seedAdmins();
