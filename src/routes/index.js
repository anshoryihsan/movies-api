import express from "express";
import { status } from "../helpers/status";
const router = express.Router();

router.get("/", async (req, res) => {
  return res.status(status.OK).send({
    success: true,
    messages: "API running successfully",
    data: {},
  });
});

export default router;
