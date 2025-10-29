import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";  
import User from "../models/UserModel.js";

export const authenticateUserRegister = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Validation
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        ok: false
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists with this email",
        ok: false
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(200).json({
      message: "User created successfully",
      result: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email
      },
      ok: true
    });

  } catch (err) {
    console.error("Registration Error Details:", err);
    res.status(500).json({
      message: "Server error",
      error: err.message,
      ok: false
    });
  }
};


export const authenticateUserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check empty fields
    if (!email || !password) {
      return res.status(400).json({ 
        message: "Email and password are required",
        ok: false 
      });
    }

    // Validate email format
    if (!email.includes("@")) {
      return res.status(400).json({ 
        message: "Invalid email format",
        ok: false 
      });
    }

    // Find user by email and explicitly select password
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ 
        message: "Email not registered",
        ok: false 
      });
    }

    // Validate password length
    if (password.length < 3 || password.length > 20) {
      return res.status(400).json({
        message: "Password length should be between 3-20 characters",
        ok: false
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ 
        message: "Password doesn't match",
        ok: false 
      });
    }

    // Generate JWT token
    const accesstoken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.secret_key,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      result: {
        id: user._id,
        username: user.username,
        email: user.email
      },
      jwt_token: accesstoken,
      ok: true
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
      ok: false
    });
  }
};