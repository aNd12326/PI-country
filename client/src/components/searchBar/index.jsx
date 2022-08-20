import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountry } from "../../store/actions";
// import searchCss from "./SearchBar.module.css";

const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  function handleOnChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getNameCountry(name));
  }

  return (
    <form onSubmit={handleSubmit} className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="text"
        placeholder="Search Country..."
        onChange={handleOnChange}
      />
      <button className="btn btn-outline-success">Search</button>
    </form>
  );
};

export default SearchBar;
