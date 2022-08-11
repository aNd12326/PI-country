import React from "react";
import { sortByContinent, sortCountries } from "../../store/actions";
import { useDispatch } from "react-redux";

const Filters = () => {
  const dispatch = useDispatch();
  function handleSort(e) {
    dispatch(sortCountries(e.target.value));
  }
  function handleContinent(e) {
    dispatch(sortByContinent(e.target.value));
  }
  function handleActivities(e) {
    dispatch(sortByContinent(e.target.value));
  }
  return (
    <div>
      <div>
        Sort
        <select onChange={(e) => handleSort(e)} name="select">
          <option value="reset">reset</option>
          <option value="ascendente">Country: A - Z</option>
          <option value="descendente">Country: Z - A</option>
          <option value="populationAsc">Population: Menor a Mayor</option>
          <option value="populationDesc">Population: Mayor a Menor</option>
        </select>
      </div>
      {/* <div>
        Sort
        <select onChange={(e) => handleSort(e)} name="select">
          <option value="reset">reset</option>
          <option value="populationAsc">Population: Menor a Mayor</option>
          <option value="populationDesc">Population: Mayor a Menor</option>
        </select>
      </div> */}
      <div>
        Sort by continent
        <select onChange={(e) => handleContinent(e)} name="select">
          <option value="reset">reset</option>
          <option value="NorthAmerica">North America</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
          <option value="Europe">Europe</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Africa">Africa</option>
          <option value="SouthAmerica">South America</option>
        </select>
      </div>
      <div>
        Filter by Activity
        <select onChange={(e) => handleActivities(e)} name="select">
          <option value="reset">reset</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
