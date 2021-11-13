import { Router } from "express";
import { byName, byDetail } from "../controllers/moviesController";
const router = Router();

router.get("/search", byName);
router.get("/detail", byDetail);

export default router;
