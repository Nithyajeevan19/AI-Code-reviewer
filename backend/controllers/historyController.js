import History from "../models/HistoryModel.js";
import mongoose from "mongoose";

// In-memory store fallback if MongoDB is not connected
const memoryHistory = [];

export const saveHistory = async (req, res) => {
  try {
    const { code, language, format, tone, analysisResult, title } = req.body;
    const userId = req.user?.id || "60c72b2f9b1d8e25a8c9e0d1";

    // If MongoDB is connected, save to the database
    if (mongoose.connection.readyState === 1) {
      const newHistory = await History.create({
        userId,
        code,
        language,
        format,
        tone,
        analysisResult,
        title,
      });

      return res.status(201).json({
        message: "History saved successfully (MongoDB)",
        history: newHistory,
      });
    }

    // Fallback to in-memory store
    const newHistory = {
      _id: "mock_history_" + Date.now(),
      userId,
      code,
      language,
      format,
      tone,
      analysisResult,
      title,
      createdAt: new Date().toISOString()
    };

    memoryHistory.unshift(newHistory); // Insert at the beginning (newest first)

    res.status(201).json({
      message: "History saved successfully (In-Memory Fallback)",
      history: newHistory,
    });
    
  } catch (err) {
    console.error("Save history error:", err);
    res.status(500).json({ message: "Error saving history" });
  }
};

export const getUserHistory = async (req, res) => {
  try {
    const userId = req.user?.id || "60c72b2f9b1d8e25a8c9e0d1";

    // If MongoDB is connected, fetch from the database
    if (mongoose.connection.readyState === 1) {
      const history = await History.find({ userId }).sort({ createdAt: -1 });
      return res.status(200).json({ history });
    }

    // Fallback to in-memory store
    const history = memoryHistory.filter(item => item.userId === userId);
    res.status(200).json({ history });
  } catch (err) {
    console.error("Fetch history error:", err);
    res.status(500).json({ message: "Error fetching history" });
  }
};


