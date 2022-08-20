import React from "react";
import { Link } from "react-router-dom";
import card from "./Card.module.css";

const CountryCard = ({ name, image, continent, id }) => {
  return (
    <div className="col p-4">
      <div className="p-5 h-100 card m-3 bg-secondary  ">
        <Link to={`/details/${id}`}>
          <h1 className="text-white text-center fs-4">{name}</h1>
          <h5 className="text-white text-center">{continent}</h5>
          <div className="text-center">
            <img src={image} width={100} height={60} alt="imgCountry" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CountryCard;
