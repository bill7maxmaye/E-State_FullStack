import express from "express";
import { getAllPosts } from "../controllers/post.controller.js";

const router = express.Router();

// Define your POST route here
router.get("/", getAllPosts);

export default router;
