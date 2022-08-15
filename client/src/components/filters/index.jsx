import React from "react";
import {
  filterActivities,
  getActivities,
  sortByContinent,
  sortCountries,
} from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import filters from "./Filters.module.css";

const Filters = () => {
  const activities = useSelector((state) => state.getActvities);
  const dispatch = useDispatch();
  function handleSort(e) {
    dispatch(sortCountries(e.target.value));
  }
  function handleContinent(e) {
    dispatch(sortByContinent(e.target.value));
  }
  function handleActivities(e) {
    dispatch(filterActivities(e.target.value));
  }

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div className={filters.selects}>
      <div>
        <label className={filters.labelTxt}>Sort Country </label>
        <select
          className={filters.select}
          onChange={(e) => handleSort(e)}
          name="select"
        >
          <option value="reset">All</option>
          <option value="ascendente">Country: A - Z</option>
          <option value="descendente">Country: Z - A</option>
        </select>
      </div>
      <div>
        <label className={filters.labelTxt}>Sort Population </label>
        <select
          className={filters.select}
          onChange={(e) => handleSort(e)}
          name="select"
        >
          <option value="reset">All</option>
          <option value="populationAsc">Population: Menor a Mayor</option>
          <option value="populationDesc">Population: Mayor a Menor</option>
        </select>
      </div>
      <div>
        <label className={filters.labelTxt}>Sort by continent </label>
        <select
          className={filters.select}
          onChange={(e) => handleContinent(e)}
          name="select"
        >
          <option value="reset">All</option>
          <option value="North America">North America</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
          <option value="Europe">Europe</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Africa">Africa</option>
          <option value="South America">South America</option>
        </select>
      </div>
      <div>
        <label className={filters.labelTxt}>Filter by Activity </label>
        <select
          className={filters.select}
          onChange={(e) => handleActivities(e)}
          name="select"
        >
          <option value="reset">reset</option>
          {activities.map((ac) => (
            <option key={ac.id} value={ac.name}>
              {ac.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
