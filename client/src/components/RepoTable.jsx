function RepoTable({ repos }) {
  return (
    <div className="repo-card">
      <h2 className="repo-title">📂 GitHub Repositories</h2>
      <div className="table-container">
        <table className="repo-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Language</th>
              <th>Stars</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {repos.map((repo, idx) => (
              <tr key={idx}>
                <td>{repo.name}</td>
                <td>{repo.language}</td>
                <td>{repo.stars}</td>
                <td>
                  <a href={repo.url} target="_blank" rel="noreferrer">
                    View Repo
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RepoTable;
