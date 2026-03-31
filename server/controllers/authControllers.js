import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Create || Register New Admin And Editor Api Keys

export const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body; // Save Datas

        const existingUser = await User.findOne({ email }); // Email Checking Already Exist Or not
        if (existingUser)
            return res.status(400).json({ message: "User Email Already Exist ❌ " });

        const hashedPassword = await bcrypt.hash(password, 10); // Password Hash

        const newUser = await User.create({
            // DataBase Saved NewUsers
            name,
            email,
            password: hashedPassword,
            role: role || "Editor",
        });

        res
            .status(201)
            .json({
                message: "user Is Sucessfully Add On DataBase ✅",
                User: newUser,
            });
    } catch (err) {
        res.status(501).json({ message: "Server Error", err: err.message });
    }
};

// Login APi keys

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user is already is register
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ message: "User  Account Not Found ❌❌" });

        if (!user.password)
            return res.status(400).json({ message: "Please Login With Google " });

        // Checking Password

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({ message: "Invaild Credentials ! ❌❌ " });

        // EMail & Password Crt iS Access Jwt TOken

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "7d" },
        ); res.status(200).json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
    } catch (error) {

        res.status(500).json({
            message: " Server Is Error", error: error.message
        })
    }
};

// Google User

export const googleLogin = async (req, res) => {
    try {
        const { name, email, googleId } = req.body
        let user = await User.findOne({ email })     // check Email 

        if (!user) {    // create new google user 
            user = await User.create({
                name, email, googleId, role: "Client"
            })
         };

            // Access Jwt Token 
            const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" })
            res.status(200).json({ token, user: { id: user._id, role: user.role, name: user.name, email: user.email } })
        
    }
    catch (err) {
        res.status(500).json({ message: "Server Error", err: err.message })
    }
}