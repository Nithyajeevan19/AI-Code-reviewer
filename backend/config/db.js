import mongoose from "mongoose";

const connectDb = async (mongoURI) => {
  try {
    await mongoose.connect(mongoURI);   // ✅ simple
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ DB Connection Error:", error.message);
    // Don't crash the server process so port 5000 stays active
  }
};

export default connectDb;
