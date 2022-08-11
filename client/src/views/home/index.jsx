import React from "react";
import Country from "../../components/country";
import Filters from "../../components/filters";
import Navbar from "../../components/navbar";
import SearchBar from "../../components/searchBar";

const Home = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Filters />
      <Country />
    </>
  );
};

export default Home;
