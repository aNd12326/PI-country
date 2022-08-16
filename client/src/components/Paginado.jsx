export default function Paginado({
  countriesForTheRestPage,
  countries,
  paginado,
  countriesForFirstPage = 9,
  currentPage,
}) {
  const pageNumbers = [];
  for (
    let i = 1;
    i <=
    Math.ceil((countries - countriesForFirstPage) / countriesForTheRestPage) +
      1;
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="paginado">
        {pageNumbers &&
          pageNumbers.map((number) => {
            return (
              <li
                className={currentPage === number ? "active" : null}
                onClick={() => paginado(number)}
                key={number}
              >
                {number}
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
