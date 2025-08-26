import { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import RepoTable from "../components/RepoTable";

function Dashboard() {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState("");

  const fetchResults = async (p = 1) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/repos/results?page=${p}`);
      setRepos(res.data.data);
      setPage(res.data.currentPage);
      setTotalPages(res.data.totalPages);
      setError("");
    } catch (err) {
      setError("Failed to fetch results");
    }
  };

  useEffect(() => {
    fetchResults(page);
  }, [page]);

  return (
    <div className="app-container">
        <div className="logo">
            <img src="/logogit.png" alt="Logo" />
        </div>
      <h1 className="text-2xl font-bold mb-4">GitHub Repo Search📜</h1>
      <SearchForm onSearch={() => fetchResults(1)} />

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <RepoTable repos={repos} />

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="pagination-btn"
        >
          ⬅ Prev
        </button>
        <span className = "pagination-info">
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="pagination-btn"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
