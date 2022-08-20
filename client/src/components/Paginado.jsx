export default function Paginado({
  countries,
  paginado,
  currentPage,
  maxPageNumberLimit,
  pageNumberLimit,
  minPageNumberLimit,
  setCurrentPage,
  setMaxPageNumberLimit,
  setMinPageNumberLimit,
  countriesPerPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(countries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <>
      <nav className="container text-white py-2">
        <ul className="pagination pagination-sm justify-content-center">
          <li className="page-item">
            <button
              className="page-link"
              disabled={currentPage === pageNumbers[0] ? true : false}
              onClick={handlePrevBtn}
            >
              Prev
            </button>
          </li>
          {pageNumbers &&
            pageNumbers.map((number) => {
              if (
                number < maxPageNumberLimit + 1 &&
                number > minPageNumberLimit
              ) {
                return (
                  <li
                    key={number}
                    id={number}
                    onClick={() => paginado(number)}
                    className={
                      currentPage === number ? "page-item active" : null
                    }
                  >
                    <span className="page-link" role="button">
                      {number}
                    </span>
                  </li>
                );
              } else {
                return null;
              }
            })}
          <li className="page-item">
            <button
              className="page-link"
              disabled={
                currentPage === pageNumbers[pageNumbers.length - 1]
                  ? true
                  : false
              }
              onClick={handleNextBtn}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
