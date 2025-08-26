import { useState } from "react";
import axios from "axios";

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!keyword) {
      setError("⚠️ Please enter a keyword");
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/repos/search", { keyword, page: 1 });
      setKeyword("");
      setError("");
      onSearch();
    } catch (err) {
      setError("⚠️ API request failed");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Enter keyword..."
          className="p-2 border rounded-l"
        />
        <button type="submit" className="search-btn">
            🔍 Search
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default SearchForm;
