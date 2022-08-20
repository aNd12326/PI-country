import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../error";
import { getCountries } from "../../store/actions";
import CountryCard from "../countryCard";
// importo Paginado
import Paginado from "../Paginado";
import Filters from "../filters";

const Country = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  // -------------- PAGINADO ----------------
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const indexOfLastCountries = currentPage * countriesPerPage; // 10
  const indexOfFirstCountries = indexOfLastCountries - countriesPerPage; // 0
  const currentCountries = countries.slice(
    indexOfFirstCountries,
    indexOfLastCountries
  );

  //           Limit of numbers(paginado)
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  console.log(currentCountries);
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  return (
    <div>
      <Filters setCurrentPage={setCurrentPage} />
      <Paginado
        countries={countries.length}
        paginado={paginado}
        currentPage={currentPage}
        maxPageNumberLimit={maxPageNumberLimit}
        pageNumberLimit={pageNumberLimit}
        minPageNumberLimit={minPageNumberLimit}
        setCurrentPage={setCurrentPage}
        setMaxPageNumberLimit={setMaxPageNumberLimit}
        setMinPageNumberLimit={setMinPageNumberLimit}
        countriesPerPage={countriesPerPage}
      />
      {currentCountries.length ? (
        <div className="container">
          <div className="row">
            {currentCountries.map((e) => {
              return (
                <CountryCard
                  key={e.id}
                  name={e.name}
                  image={e.image}
                  continent={e.continent}
                  id={e.id}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
};

export default Country;
