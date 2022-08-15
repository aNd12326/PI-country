import React from "react";
import Country from "../../components/country";
import Filters from "../../components/filters";
import Navbar from "../../components/navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Filters />
      <Country />
    </>
  );
};

export default Home;
