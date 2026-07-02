import './config/dns.js';
import express from "express";

import dotenv from "dotenv";
import cors from "cors";

import authenticateRoute from "./routes/authenticateRoutes.js";
import historyRoutes from "./routes/historyRoute.js";
import analysisRoutes from "./routes/analysisRoute.js";
import connectDb from './config/db.js'

const app = express();
dotenv.config();

const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;

//"https://ai-code-reviewer-beta-eight.vercel.app",

app.use(cors({
  origin: ["http://localhost:5173", "https://ai-code-reviewer-beta-eight.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json());
app.use(cors());

app.use("/api", authenticateRoute);
app.use("/api/history", historyRoutes);
app.use("/api/analysis", analysisRoutes);


// const connection = ()=>{mongoose
//   .connect("mongodb+srv://makilijeevan_db_user:PiGxkEaoTlcil5n6@cluster1.ep4irvz.mongodb.net/?appName=Cluster1")
//   .then(() => {
//     console.log("Database connected");
//     app.listen(port, () => {
//       console.log(`Server started on port ${port}`);
//     });
//   })
//   .catch((err) => {
//     console.error("MongoDB connection error:", err);
//     process.exit(1);
//   });
// }

// connection()


const serverRunning = async () => {
  try {
    // Start Express server immediately to prevent 'refused to connect' errors
    app.listen(port, () => {
      console.log(`Server started on port ${port}`)
    })

    // Connect to MongoDB asynchronously in the background
    connectDb(mongoURI);
  }
  catch (error) {
    console.log("server connecting error bro ", error)
  }

}
serverRunning()


