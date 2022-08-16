import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, postActivity } from "../../store/actions";
import form from "./Form.module.css";

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
    errors.season = "A season is required";
  }

  if (state.idCountry.length === 0) {
    errors.idCountry = "Select a Country is required";
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
    idCountry: "",
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
    setInput({
      ...input,
      idCountry: [...new Set([...input.idCountry, e.target.value])],
    });
    setErroresFormulario(
      validate({ ...input, [e.target.name]: e.target.value })
    );
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
      setInput({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        idCountry: "",
      });
      alert("Activity Created");
    } else {
      alert("Faltan completar algunos datos");
    }
  }

  return (
    <div className={form.containerForm}>
      <h1 className={form.titleForm}>Create Activity</h1>
      <form className={form.cssForm} onSubmit={handleOnSubmit}>
        <div className={form.formGroup}>
          <label className={form.labelTxt}>Name: </label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
            className={form.inputControl}
            placeholder="Type a Name"
          />
          {erroresFormulario.name ? (
            <h4 className={form.errorsColor}>{erroresFormulario.name}</h4>
          ) : (
            false
          )}
        </div>
        {/* ---------------------- */}
        <div className={form.formGroup}>
          <label className={form.labelTxt}>Difficulty: </label>
          <select
            name="difficulty"
            onChange={handleChange}
            className={form.select}
            defaultValue="dft"
          >
            <option value="dft" disabled={true}>
              Select Number 1 to 5
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {erroresFormulario.difficulty ? (
            <h4 className={form.errorsColor}>{erroresFormulario.difficulty}</h4>
          ) : (
            false
          )}
        </div>
        {/* ---------------------- */}
        <div className={form.formGroup}>
          <label className={form.labelTxt}>Duration: </label>
          <input
            type="number"
            name="duration"
            value={input.duration}
            onChange={handleChange}
            className={form.inputControl}
            placeholder="type a number"
          />
          {erroresFormulario.duration ? (
            <h4 className={form.errorsColor}>{erroresFormulario.duration}</h4>
          ) : (
            false
          )}
        </div>
        {/* ---------------------- */}
        <div className={form.formGroup}>
          <label className={form.labelTxt}>Season: </label>
          <select
            className={form.select}
            name="season"
            // value={input.season}
            onChange={handleChange}
            defaultValue="default"
          >
            <option value="default" disabled={true}>
              Select one Season
            </option>
            <option value="Verano">Verano</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
            <option value="Primavera">Primavera</option>
          </select>
          {erroresFormulario.season ? (
            <h4 className={form.errorsColor}>{erroresFormulario.season}</h4>
          ) : (
            false
          )}
        </div>
        {/* ---------------------- */}
        <div className={form.formGroup}>
          <label className={form.labelTxt}>Country</label>
          <select
            defaultValue="Countries"
            name="idCountry"
            // value={input.idCountry}
            onChange={(e) => handleSelect(e)}
            className={form.select}
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
          {input.idCountry.length === 0 ? (
            <h4 className={form.errorsColor}>{erroresFormulario.idCountry}</h4>
          ) : (
            false
          )}
        </div>
        {/* ---------------------- */}
        <div className={form.formGroup}>
          <button
            disabled={
              Object.keys(erroresFormulario).length === 0
                ? false
                : true && form.btnColorAct
            }
            className={form.btnForm}
          >
            Send
          </button>
        </div>
      </form>
      <div className={form.countriesForm}>
        {input.idCountry.length > 0 ? (
          <>
            <h1 className={form.labelTxtCountries}>Selected Countries: </h1>
            <div className={form.smallTxt}>
              <h4> {input?.idCountry.map((e) => e + " ,")}</h4>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Form;
