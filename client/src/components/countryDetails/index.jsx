import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetailsCountry } from "../../store/actions";
import Navbar from "../navbar";

const CountryDetails = () => {
  const { id } = useParams();
  const countryDetails = useSelector((state) => state.details);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailsCountry(id));
  }, [dispatch, id]);

  return (
    <>
      <Navbar />
      {countryDetails.map((e) => {
        return (
          <div className="container-sm text-center p-5" key={e.id}>
            <div className="row p-2 card">
              <h1 className="py-3 card-header bg-black text-white">Details</h1>
              <div className="col card-body">
                <div>
                  <h5>
                    <span className="fw-bold">Country:</span> {e.name}
                  </h5>
                </div>
                <div>
                  <h5 className="font-monospace">
                    <span className="fw-bold">Code: </span> "{e.id}"
                  </h5>
                </div>
                <div>
                  <h5 className="font-monospace">
                    <span className="fw-bold">Continent: </span> {e.continent}
                  </h5>
                </div>
                <>
                  {e.capital === "NaN" ? null : (
                    <div>
                      <h5 className="font-monospace">
                        <span className="fw-bold">Capital: </span>
                        {e.capital}
                      </h5>
                    </div>
                  )}
                </>
                <>
                  {e.subRegion === "NaN" ? null : (
                    <div>
                      <h5 className="font-monospace">
                        <span className="fw-bold">Subregion: </span>{" "}
                        {e.subRegion}
                      </h5>
                    </div>
                  )}
                </>
                <div>
                  <h5 className="font-monospace">
                    <span className="fw-bold">Area: </span> {e.area} km2
                  </h5>
                </div>
                <div>
                  <h5 className="font-monospace">
                    <span className="fw-bold">Population: </span> {e.population}
                  </h5>
                </div>
              </div>
              <div className="col">
                <h1 className="fw-bold py-3 card-header bg-black text-white">
                  Activities
                </h1>
                {e.activities.length ? (
                  <>
                    {e.activities.map((e) => {
                      return (
                        <div key={e.id} className="p-2">
                          <div>
                            <h5 className="font-monospace">
                              <span className="fw-bold">Name:</span> {e.name}
                            </h5>
                          </div>
                          <div className="py-2">
                            <h5 className="font-monospace">
                              <span className="fw-bold">Difficulty:</span>{" "}
                              {e.difficulty}
                            </h5>
                          </div>
                          <div className="py-2">
                            <h5 className="font-monospace">
                              <span className="fw-bold"> Duration:</span>{" "}
                              {e.duration}
                            </h5>
                          </div>
                          <div className="py-2">
                            <h5 className="font-monospace">
                              <span className="fw-bold">Season: </span>{" "}
                              {e.season}
                            </h5>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : null}
              </div>
              <div className="p-2">
                <img src={e.image} width={100} alt="img" />
              </div>
            </div>
            <div>
              <Link to="/home">
                <div className="p-2">
                  <button type="button" className="btn btn-info">
                    Go Back
                  </button>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CountryDetails;
