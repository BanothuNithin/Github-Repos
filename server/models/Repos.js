import mongoose from "mongoose";

const repoSchema = new mongoose.Schema({
  name: String,
  url: String,
  stars: Number,
  language: String,
  keyword: String,
  createdAt: { type: Date, default: Date.now },
}); 

const Repo = mongoose.model("Repo", repoSchema);

export default Repo;