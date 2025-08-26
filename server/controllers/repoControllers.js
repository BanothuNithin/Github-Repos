import axios from "axios";
import Repo from "../models/Repos.js";

// Fetch GitHub repos & save
export const searchRepos = async (req, res) => {
  try {
    const { keyword, page = 1 } = req.body;
    if (!keyword) return res.status(400).json({ message: "Keyword required" });

    // GitHub API with pagination
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=${keyword}&page=${page}&per_page=10`
    );

    if (!response.data.items || response.data.items.length === 0) {
      return res.status(404).json({ message: "No repositories found" });
    }

    const repos = response.data.items.map((r) => ({
      name: r.name,
      url: r.html_url,
      stars: r.stargazers_count,
      language: r.language,
      keyword,
    }));

    await Repo.insertMany(repos);
    res.json({ message: "Data saved successfully", repos });
  } catch (err) {
    console.error("API Error:", err.message);
    res.status(500).json({ error: "API fetch/store failed" });
  }
};

// Get stored results with pagination
export const getResults = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const results = await Repo.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
    const total = await Repo.countDocuments();

    res.json({
      data: results,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    console.error("DB Error:", err.message);
    res.status(500).json({ error: "Failed to fetch results" });
  }
};
