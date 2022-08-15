import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountry } from "../../store/actions";
import searchCss from "./SearchBar.module.css";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={searchCss.inputSearchBar}
          type="text"
          value={name}
          onChange={handleOnChange}
          placeholder="Search Country..."
        />
        <button className={searchCss.btnSearch}>Send</button>
      </form>
    </div>
  );
};

export default SearchBar;
