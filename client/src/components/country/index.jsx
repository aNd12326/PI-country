import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearPage, getCountries } from "../../store/actions";
import CountryCard from "../countryCard";

const Country = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    return () => {
      //todo lo que suceda dentro del return es cuando se desmonta el componente
      dispatch(clearPage());
    };
  }, [dispatch]);
  console.log(countries);

  return (
    <div>
      {countries.map((e) => {
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
  );
};

export default Country;
