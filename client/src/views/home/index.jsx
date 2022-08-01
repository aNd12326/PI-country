import React from "react";
import Country from "../../components/country";
import Navbar from "../../components/navbar";
import SearchBar from "../../components/searchBar";

const Home = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Country />
    </>
  );
};

export default Home;
