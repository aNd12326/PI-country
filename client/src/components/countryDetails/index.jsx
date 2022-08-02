import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailsCountry } from "../../store/actions";
import Navbar from "../navbar";

const CountryDetails = () => {
  const { id } = useParams();
  const countryDetails = useSelector((state) => state.details);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailsCountry(id));
    //   si estamos seteando esto en redux, deberiamos limpiarlo aca con el return
  }, [dispatch, id]);
  console.log(countryDetails);

  return (
    <>
      <Navbar />
      {countryDetails.map((e) => {
        return (
          <div key={e.id}>
            <h1>Country: {e.name}</h1>
            <h2>Code: {e.id}</h2>
            <h5>Continent: {e.continent}</h5>
            <h5>Capital: {e.capital}</h5>
            <h5>SubRegion: {e.subRegion}</h5>
            <h5>Area: {e.area}</h5>
            <h5>Population: {e.population}</h5>
            <img src={e.image} alt="img" />
            <h1>Activities</h1>
            {e.activities.length ? (
              <>
                {/* <h5>Name: {e.activities.map((e) => e.name)}</h5>
                <h5>Difficulty: {e?.activities.map((e) => e.difficulty)}</h5>
                <h5>Duration: {e?.activities.map((e) => e.duration)}</h5>
                <h5>Season: {e?.activities.map((e) => e.season)}</h5> */}
                {e.activities.map(e => {
                  return (
                    <div key={e.id}>
                    <h5>Name: {e.name}</h5>
                    <h5>difficulty: {e.difficulty}</h5>
                    <h5>duration: {e.duration}</h5>
                    <h5>season: {e.season}</h5>
                    </div>
                  )
                })}
              </>
            ) : null}
          </div>
        );
      })}
    </>
  );
};

export default CountryDetails;


