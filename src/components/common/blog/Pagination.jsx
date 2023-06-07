const { useState } = require("react");
const { useDispatch } = require("react-redux");
const { adddata } = require("../../../features/page/pageSlice");
const { useEffect } = require("react");

function Pagination({ itemsPerPage, data }) {
  let dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  let totalPages = Math.ceil(data.length / itemsPerPage);
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  let currentData = data.slice(startIndex, endIndex);
  function handlePageChange(event, page) {
    event.preventDefault();
    setCurrentPage(page);
  }
  console.log(currentData);
  useEffect(() => {
    dispatch(adddata(currentData));
  }, [currentPage]);
  return (
    <div className="en">
      <ul>
        {currentData.map((item, index) => (
          <li key={index}>{item.name}</li>
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
