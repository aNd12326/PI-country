import React, { useState } from "react";

const Form = () => {
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
  });

  return (
    <>
      <label>Name: </label>
      <input type="text" />
      <label>Difficulty: </label>
      <input type="text" />
      <label>Duration: </label>
      <input type="text" />
      <label>Season: </label>
      <input type="text" />

      <button disabled={true}>Send</button>
    </>
  );
};

export default Form;
