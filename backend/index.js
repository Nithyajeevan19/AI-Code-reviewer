import express from 'express'
import mongoose from "mongoose";
import dotenv from 'dotenv'
import cors from "cors";

import authenticateRoute from './routes/authenticateRoutes.js'
import historyRoutes from './routes/historyRoute.js'

const app = express()
dotenv.config()

const port = process.env.PORT
const mongoURI = process.env.mongo_uri

app.use(cors({
  origin: ["http://localhost:5173", "https://ai-code-reviewer-cvmi.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
}));


app.use(express.json());

app.use('/api', authenticateRoute)
app.use("/api/history", historyRoutes);



mongoose.connect(mongoURI).then(() => {
    console.log("data base connected")
    app.listen(port, () => {
        console.log('server started')
    })
})
    .catch(err => {
        console.error("MongoDB connection error:", err)
        process.exit(1)
    });

