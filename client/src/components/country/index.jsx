import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../error";
import { clearPage, getCountries } from "../../store/actions";
import CountryCard from "../countryCard";
import countryCss from "./Country.module.css";
// importo Paginado
import Paginado from "../Paginado";

const Country = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  const countriesForFirstPage = 9;
  const countriesForTheRestPage = 10;
  // -------------- PAGINADO ----------------
  const [currentPage, setCurrentPage] = useState(1);
  const [indexOfLastCountry, setIndexOfLastCountry] = useState(
    countriesForFirstPage
  );
  const [indexOfFirstCountry, setIndexOfFirstCountry] = useState(0);

  const [currentCountry, setCurrentCountry] = useState([]);

  // console.log(currentCountry);
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
    const initialIndex =
      pageNumber === 1 ? 0 : countriesForTheRestPage * (pageNumber - 1) - 1;
    const finalIndex =
      pageNumber === 1
        ? countriesForFirstPage
        : countriesForTheRestPage * pageNumber - 1;

    setIndexOfFirstCountry(initialIndex);
    setIndexOfLastCountry(finalIndex);
    setCurrentCountry(countries.slice(initialIndex, finalIndex));
  };

  useEffect(() => {
    setCurrentCountry(countries.slice(indexOfFirstCountry, indexOfLastCountry));
  }, [countries, indexOfFirstCountry, indexOfLastCountry]);

  useEffect(() => {
    dispatch(getCountries());
    return () => {
      //todo lo que suceda dentro del return es cuando se desmonta el componente
      dispatch(clearPage());
    };
  }, [dispatch]);
  return (
    <div>
      <Paginado
        countriesForTheRestPage={countriesForTheRestPage}
        countries={countries.length}
        paginado={paginado}
        countriesForFirstPage={countriesForFirstPage}
        currentPage={currentPage}
      />
      {currentCountry.length ? (
        <div className={countryCss.cardGrid}>
          {currentCountry.map((e) => {
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
      ) : (
        <Error />
      )}
    </div>
  );
};

export default Country;
