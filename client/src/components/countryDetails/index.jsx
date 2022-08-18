import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetailsCountry } from "../../store/actions";
import Navbar from "../navbar";
import detailsCss from "./Details.module.css";

const CountryDetails = () => {
  const { id } = useParams();
  const countryDetails = useSelector((state) => state.details);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailsCountry(id));
  }, [dispatch, id]);
  console.log(countryDetails);

  return (
    <>
      <Navbar />
      {countryDetails.map((e) => {
        return (
          <div key={e.id} className={detailsCss.containerDetails}>
            <div className={detailsCss.titleContainer}>
              <h1>
                Country: <small>{e.name}</small>
              </h1>
            </div>
            <div className={detailsCss.codeContainer}>
              <h2>Code: </h2>
              <h2 className={detailsCss.alignCode}>"{e.id}"</h2>
            </div>
            <div className={detailsCss.continentContainer}>
              <h3>Continent: </h3>
              <h3>{e.continent}</h3>
            </div>
            <>
              {e.capital === "NaN" ? null : (
                <div className={detailsCss.capitalContainer}>
                  <h3>Capital: </h3>
                  <h3>{e.capital}</h3>
                </div>
              )}
            </>
            <>
              {e.subRegion === "NaN" ? null : (
                <div className={detailsCss.subRegionContainer}>
                  <h3>SubRegion:</h3>
                  <h3>{e.subRegion}</h3>
                </div>
              )}
            </>
            <div className={detailsCss.areaContainer}>
              <h3>Area: </h3>
              <h3>{e.area} km2</h3>
            </div>
            <div className={detailsCss.populationContainer}>
              <h3>Population: </h3>
              <h3>{e.population}</h3>
            </div>
            <div className={detailsCss.imageContainer}>
              <img src={e.image} width={100} alt="img" />
            </div>
            <div className={detailsCss.titleActivity}>
              <h1>Activities</h1>
            </div>
            {e.activities.length ? (
              <>
                {e.activities.map((e) => {
                  return (
                    <div key={e.id} className={detailsCss.containerActivity}>
                      <h3>Name: {e.name}</h3>
                      <h3>Difficulty: {e.difficulty}</h3>
                      <h3>Duration: {e.duration}</h3>
                      <h3>Season: {e.season}</h3>
                    </div>
                  );
                })}
              </>
            ) : null}
          </div>
        );
      })}
      <div className={detailsCss.btnDetails}>
        <Link to="/home">
          <button className={detailsCss.btnDet}>Go Back</button>
        </Link>
      </div>
    </>
  );
};

export default CountryDetails;
