import { Router } from "express";
import { saveHistory, getUserHistory } from "../controllers/historyController.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const historyRoutes = Router();

historyRoutes.post("/save", authenticateToken, saveHistory);
historyRoutes.get("/all", authenticateToken, getUserHistory);
historyRoutes.get('/history', authenticateToken, getUserHistory);

export default historyRoutes;
