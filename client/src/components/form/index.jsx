import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, postActivity } from "../../store/actions";

function validate(state) {
  const errors = {};
  if (!state.name) {
    errors.name = "Name is required";
  } else if (/(?=.*[0-9])/.test(state.name)) {
    errors.name = "Name must not be a number";
  }

  if (!state.difficulty) {
    // tiene que ser del 1 al 5
    errors.difficulty = "Difficulty is required";
  } else if (!/^\d+$/.test(state.difficulty)) {
    errors.difficulty = "Difficulty must be a number";
  }

  if (!state.duration) {
    errors.duration = "Duration is required";
  } else if (!/^\d+$/.test(state.duration)) {
    errors.duration = "Duration must be a number";
  }

  if (!state.season) {
    errors.season = "Season is required";
  }

  return errors;
}

const Form = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    idCountry: [],
  });

  const [erroresFormulario, setErroresFormulario] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    idCountry: [],
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    // setErroresFormulario(validate(input));
    setErroresFormulario(
      validate({ ...input, [e.target.name]: e.target.value })
    );
  }

  function handleSelect(e) {
    e.preventDefault();
    setInput({
      ...input,
      idCountry: [...new Set([...input.idCountry, e.target.value])],
    });
  }

  function handleOnSubmit(e) {
    e.preventDefault(e);
    if (input.idCountry.length === 0) {
      alert("No ha seleccionado ninguna opcion de paises");
    } else if (
      input.name &&
      input.difficulty &&
      input.duration &&
      input.season &&
      !erroresFormulario.name &&
      !erroresFormulario.difficulty &&
      !erroresFormulario.duration &&
      !erroresFormulario.season
    ) {
      console.log(input);
      dispatch(postActivity(input));
    } else {
      alert("Faltan completar algunos datos");
    }
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={handleChange}
        />
        {erroresFormulario.name ? (
          <h4>
            <small>{erroresFormulario.name}</small>
          </h4>
        ) : (
          false
        )}
        {/* ---------------------- */}
        <label>Difficulty: </label>
        <select
          name="difficulty"
          value={input.difficulty}
          onChange={handleChange}
        >
          <option disabled={input.difficulty === "" ? false : true}>
            From 1 to 5
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        {erroresFormulario.difficulty ? (
          <h4>
            <small>{erroresFormulario.difficulty}</small>
          </h4>
        ) : (
          false
        )}
        {/* ---------------------- */}
        <label>Duration: </label>
        <input
          type="number"
          name="duration"
          value={input.duration}
          onChange={handleChange}
        />
        {erroresFormulario.duration ? (
          <h4>
            <small>{erroresFormulario.duration}</small>
          </h4>
        ) : (
          false
        )}
        {/* ---------------------- */}
        <label>Season: </label>
        <select name="season" value={input.season} onChange={handleChange}>
          <option disabled={input.season === "" ? false : true}>
            Select one
          </option>
          <option value="Verano">Verano</option>
          <option value="Otoño">Otoño</option>
          <option value="Invierno">Invierno</option>
          <option value="Primavera">Primavera</option>
        </select>

        {/* <option disabled={input.idCountry.length ? true : false} value="">
          Countries...
        </option> */}

        <label>Country</label>
        <select
          defaultValue="Countries"
          name="idCountry"
          // value={input.idCountry}
          onChange={(e) => handleSelect(e)}
        >
          <option value="Countries" disabled={true}>
            Select a Country
          </option>
          {countries.map((e) => {
            return (
              <option value={e.id} key={e.id}>
                {e.name}
              </option>
            );
          })}
        </select>

        {/* <select
          onChange={handleSelect}
          defaultValue={"None"}
          name="idCountry"
          id="idCountry"
        >
          <option disabled value="None">
            Select a Country
          </option>
          {countries?.map((country) => {
            return (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            );
          })}
        </select> */}

        <button
          disabled={Object.keys(erroresFormulario).length === 0 ? false : true}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
