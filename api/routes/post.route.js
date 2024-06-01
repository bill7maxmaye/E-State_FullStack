import express from "express";

const router = express.Router();

// Define your POST route here
router.get("/test", (req, res) => {
  console.log("test route works");
});

export default router;
