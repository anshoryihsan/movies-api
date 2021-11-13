import { Router } from "express";
import { getLogs } from "../controllers/logController";
const router = Router();

router.get("/log", getLogs);

export default router;
