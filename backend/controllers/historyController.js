import History from "../models/HistoryModel.js";

export const saveHistory = async (req, res) => {
  try {
    const { code, language, format, tone, analysisResult, title } = req.body;
    const userId = req.user.id;

    const newHistory = await History.create({
      userId,
      code,
      language,
      format,
      tone,
      analysisResult,
      title,
    });

    res.status(201).json({
      message: "History saved successfully",
      history: newHistory,
    });
    
  } catch (err) {
    console.error("Save history error:", err);
    res.status(500).json({ message: "Error saving history" });
  }
};


export const getUserHistory = async (req, res) => {
  try {
    const userId = req.user.id;
    const history = await History.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json({ history });
  } catch (err) {
    console.error("Fetch history error:", err);
    res.status(500).json({ message: "Error fetching history" });
  }
};


