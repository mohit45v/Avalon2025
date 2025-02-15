import { Schema, model } from "mongoose";
import { hash, compare } from "bcrypt";

const AdminSchema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }, // Will be hashed before saving
        role: { type: String, required: true, enum: ["admin", "superadmin"] }
    },
    { timestamps: true }
);

// 🔐 Hash password before saving
AdminSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next(); // Only hash if password is modified
    this.password = await hash(this.password, 10);
    next();
});

// 🔐 Compare entered password with hashed password
AdminSchema.methods.comparePassword = async function (enteredPassword) {
    return await compare(enteredPassword, this.password);
};

const Admin = model("Admin", AdminSchema);
export default Admin;
