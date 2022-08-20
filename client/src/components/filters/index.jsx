import React from "react";
import {
  filterActivities,
  getActivities,
  sortByContinent,
  sortCountries,
} from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Filters = ({ setCurrentPage, setIndexOfFirstCountry }) => {
  const activities = useSelector((state) => state.getActvities);
  const dispatch = useDispatch();
  function handleSort(e) {
    dispatch(sortCountries(e.target.value));
  }
  function handleContinent(e) {
    dispatch(sortByContinent(e.target.value));
    setCurrentPage(1);
  }
  function handleActivities(e) {
    dispatch(filterActivities(e.target.value));
    setCurrentPage(1);
  }

  // function filtrarPorAreas(e) {
  //   dispatch(filterArea());
  //   setCurrentPage(1);
  //   setIndexOfFirstCountry(0);
  // }

  // function resetFilters() {
  //   dispatch(resetAllFilters());
  // }

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-sm">
          <label className="text-white">Sort Country </label>
          <select
            onChange={(e) => handleSort(e)}
            name="select"
            defaultValue="dft"
            className="form-select"
          >
            <option value="dft" disabled={true}>
              Select one option
            </option>
            <option value="reset">reset</option>
            <option value="ascendente">Country: A - Z</option>
            <option value="descendente">Country: Z - A</option>
          </select>
        </div>
        <div className="col-sm">
          <label className="text-white">Sort Population </label>
          <select
            onChange={(e) => handleSort(e)}
            name="select"
            defaultValue="dft"
            className="form-select"
          >
            <option value="dft" disabled={true}>
              Select one option
            </option>
            <option value="reset">reset</option>
            <option value="populationAsc">Population: Menor a Mayor</option>
            <option value="populationDesc">Population: Mayor a Menor</option>
          </select>
        </div>
        <div className="col-sm">
          <label className="text-white">Sort by continent </label>
          <select
            onChange={(e) => handleContinent(e)}
            name="select"
            defaultValue="dft"
            className="form-select"
          >
            <option value="dft" disabled={true}>
              Select a continent
            </option>
            <option value="reset">reset</option>
            <option value="North America">North America</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
            <option value="Europe">Europe</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Africa">Africa</option>
            <option value="South America">South America</option>
          </select>
        </div>
        <div className="col-sm">
          <label className="text-white">Filter by Activity </label>
          <select
            onChange={(e) => handleActivities(e)}
            name="select"
            defaultValue="dft"
            className="form-select"
          >
            <option value="dft" disabled={true}>
              Select and activity
            </option>
            <option value="reset">reset activity</option>
            {activities.map((ac) => (
              <option key={ac.id} value={ac.name}>
                {ac.name}
              </option>
            ))}
          </select>
        </div>
        {/* <button onClick={resetFilters}>Reset filters</button>
      <button onClick={filtrarPorAreas}>filter by area</button> */}
      </div>
    </div>
  );
};

export default Filters;
