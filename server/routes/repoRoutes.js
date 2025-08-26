import express from "express";
import { searchRepos, getResults } from "../controllers/repoControllers.js";

const router = express.Router();

router.post("/search", searchRepos);
router.get("/results", getResults);

export default router;
