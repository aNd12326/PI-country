export default function Paginado({
  countriesForTheRestPage,
  countries,
  paginado,
  countriesForFirstPage = 9,
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
              <li onClick={() => paginado(number)} key={number}>
                {number}
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
