import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ name, image, continent, id }) => {
  return (
    <>
      <Link to={`/details/${id}`}>
        <h1>{name}</h1>
        <h5>{continent}</h5>
        <img src={image} alt="imgCountry" />
      </Link>
    </>
  );
};

export default CountryCard;
