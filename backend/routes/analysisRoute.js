// backend/routes/analysisRoute.js
import { Router } from "express";
import { analyzeCode } from "../controllers/analysisController.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const analysisRoutes = Router();
analysisRoutes.post("/analyze", authenticateToken, analyzeCode);
export default analysisRoutes;
