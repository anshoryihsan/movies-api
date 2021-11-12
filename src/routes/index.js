import express from "express";
// import { status } from "../helpers/status";
const router = express.Router();

router.get("/", async (req, res) => {
  return res.status(200).send({
    success: true,
    messages: "API running successfully",
    data: {},
  });
});

export default router;
