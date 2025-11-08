import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// Define User schema
const schema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
    }, 
    { timestamps: true }
);

// Hash password before saving
schema.pre("save", async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Compare entered password with hased password
schema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Compile User model from schema
export default mongoose.model('User', schema);