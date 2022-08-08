export default function Paginado({
  currentPage,
  countriesPerPage,
  countries,
  paginado,
  maxPageNumberLimit,
  minPageNumberLimit,
  setMaxPageNumberLimit,
  setMinPageNumberLimit,
  setCurrentPage,
  pageNumberLimit,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(countries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleNextBtn = (e) => {
    // setCurrentPage(currentPage + 1);
    // if (currentPage + 1 > maxPageNumberLimit) {
    //   setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
    //   setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    // }
    console.log(e);
  };

  const handlePrevBtn = (e) => {
    // setCurrentPage(currentPage - 1);
    // if ((currentPage - 1) % pageNumberLimit === 0) {
    //   setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
    //   setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    // }
  };

  return (
    <nav>
      <ul className="pageNumbers">
        <li>
          <button
            disabled={currentPage === pageNumbers[0] ? true : false}
            onClick={(e) => handlePrevBtn(e)}
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
                  className={currentPage === number ? "active" : null}
                >
                  {number}
                </li>
              );
            } else {
              return null;
            }
          })}
        <li>
          <button
            disabled={
              currentPage === pageNumbers[pageNumbers.length - 1] ? true : false
            }
            onClick={(e) => handleNextBtn(e)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
