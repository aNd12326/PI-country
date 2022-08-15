import React from "react";
import { Link } from "react-router-dom";
import card from "./Card.module.css";

const CountryCard = ({ name, image, continent, id }) => {
  return (
    <div className={card.container}>
      <div className={card.country}>
        <Link to={`/details/${id}`}>
          <h1 className={card.name}>{name}</h1>
          <h5 className={card.continent}>{continent}</h5>
          <img src={image} width={100} height={60} alt="imgCountry" />
        </Link>
      </div>
    </div>
  );
};

export default CountryCard;
