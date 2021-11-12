import express from "express";
import { status, response } from "../helpers/status";
const router = express.Router();

router.get("/", async (req, res) => {
  return res
    .status(status.OK)
    .send(response.success(null, "API running successfully"));
});

export default router;
