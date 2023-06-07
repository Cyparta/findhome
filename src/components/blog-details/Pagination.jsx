function Pagination({ itemsPerPage, data }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  function handlePageChange(event, page) {
    event.preventDefault();
    setCurrentPage(page);
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div>
      <ul>
        {currentData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <nav>
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={i}
              className={`page-item${i + 1 === currentPage ? " active" : ""}`}
            >
              <a
                className="page-link"
                href="#"
                onClick={(event) => handlePageChange(event, i + 1)}
              >
                {i + 1}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
module.exports = Pagination;
