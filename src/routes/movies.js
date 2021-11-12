import { Router } from "express";
import { byName } from "../controllers/moviesController";
const router = Router();

router.get("/search", byName);

export default router;
