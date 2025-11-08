import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// User registration endpoint
router.post("/register", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check for existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists." });
        }

        // Create user instance
        const user = await User.create({ email, password });

        // Generate authentication token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        res.status(201).json({
            _id: user._id,
            email: user.email,
            token,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Login
router.post("/login", async (req, res) => {
    // Extract email and password from request body
    const { email, password } = req.body;
    try {
        // Find user
        const user = await User.findOne({ email });
        if (user && (await user.matchPassword(password))) {
            // Generate token
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                expiresIn: "1d",
            });

            // Send token
            res.json({
                _id: user._id,
                email: user.email,
                token,
            });
        } else {
            res.status(401).json({ message: "Invalid email or password." }); // Unauthorized code
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;