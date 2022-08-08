import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../error";
import { clearPage, getCountries } from "../../store/actions";
import CountryCard from "../countryCard";
// IMPORTO PAGINADO
import Paginado from "../Paginado";

const Country = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  // PAGINADO
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const indexOfLastCountry = currentPage * countriesPerPage; // 10
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; // 0
  const currentCountry = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
    // ******--- Haciendo que la pag 1 sea de 9 countries y las demas de 10
    if (pageNumber === 1) {
      setCountriesPerPage(9);
    } else if (pageNumber !== 1) {
      setCountriesPerPage(10);
    }
  };
  console.log(currentCountry);
  useEffect(() => {
    dispatch(getCountries());
    // *****------- Antes que cargue el componente , que la pag 1 sea de 9 paises
    if (currentPage === 1) {
      setCountriesPerPage(9);
    } else {
      setCountriesPerPage(10);
    }
    return () => {
      //todo lo que suceda dentro del return es cuando se desmonta el componente
      dispatch(clearPage());
    };
  }, [dispatch]);
  return (
    <div>
      <Paginado
        currentPage={currentPage}
        countriesPerPage={countriesPerPage}
        countries={countries.length}
        paginado={paginado}
        maxPageNumberLimit={maxPageNumberLimit}
        minPageNumberLimit={minPageNumberLimit}
        setCurrentPage={setCurrentPage}
        setMaxPageNumberLimit={setMaxPageNumberLimit}
        setMinPageNumberLimit={setMinPageNumberLimit}
        pageNumberLimit={pageNumberLimit}
      />
      {currentCountry.length ? (
        currentCountry.map((e) => {
          return (
            <CountryCard
              key={e.id}
              name={e.name}
              image={e.image}
              continent={e.continent}
              id={e.id}
            />
          );
        })
      ) : (
        <Error />
      )}
    </div>
  );
};

export default Country;
