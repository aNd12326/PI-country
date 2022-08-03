import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountry } from "../../store/actions";

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
        <input type="text" value={name} onChange={handleOnChange} />
        <button>Send</button>
      </form>
    </div>
  );
};

export default SearchBar;
