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
    <div className="container p-4">
      <div className="row">
        <div className="card-header bg-dark text-white text-center p-2">
          <h3>Create Activity</h3>
        </div>
        <div className="card-body d-flex justify-content-center bg-white">
          <form onSubmit={handleOnSubmit} className="p-3">
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label text-center ">
                Name:{" "}
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={handleChange}
                  placeholder="Type a Name"
                  className="form-control"
                />
              </div>
              {erroresFormulario.name ? (
                <h4 className={form.errorsColor}>{erroresFormulario.name}</h4>
              ) : (
                false
              )}
            </div>
            {/* ---------------------- */}
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label text-center">
                Difficulty:
              </label>
              <div className="col-sm-10">
                <select
                  className="form-control"
                  name="difficulty"
                  onChange={handleChange}
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
              </div>
              {erroresFormulario.difficulty ? (
                <h4 className={form.errorsColor}>
                  {erroresFormulario.difficulty}
                </h4>
              ) : (
                false
              )}
            </div>
            {/* ---------------------- */}
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label text-center">
                Duration:
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  name="duration"
                  value={input.duration}
                  onChange={handleChange}
                  placeholder="type a number"
                  className="form-control"
                />
              </div>
              {erroresFormulario.duration ? (
                <h4 className={form.errorsColor}>
                  {erroresFormulario.duration}
                </h4>
              ) : (
                false
              )}
            </div>
            {/* ---------------------- */}
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label text-center">
                Season:{" "}
              </label>
              <div className="col-sm-10">
                <select
                  name="season"
                  onChange={handleChange}
                  defaultValue="default"
                  className="form-control"
                >
                  <option value="default" disabled={true}>
                    Select one Season
                  </option>
                  <option value="Verano">Verano</option>
                  <option value="Otoño">Otoño</option>
                  <option value="Invierno">Invierno</option>
                  <option value="Primavera">Primavera</option>
                </select>
              </div>

              {erroresFormulario.season ? (
                <h4 className={form.errorsColor}>{erroresFormulario.season}</h4>
              ) : (
                false
              )}
            </div>
            {/* ---------------------- */}
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label text-center">
                Country
              </label>
              <div className="col-sm-10">
                <select
                  defaultValue="Countries"
                  name="idCountry"
                  onChange={(e) => handleSelect(e)}
                  className="form-control"
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
              </div>
              {input.idCountry.length === 0 ? (
                <h4 className={form.errorsColor}>
                  {erroresFormulario.idCountry}
                </h4>
              ) : (
                false
              )}
            </div>
            {/* ---------------------- */}
            <div className="text-center">
              <button
                className="btn btn-info"
                disabled={
                  Object.keys(erroresFormulario).length === 0
                    ? false
                    : true && form.btnColorAct
                }
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div>
          {input.idCountry.length > 0 ? (
            <>
              <h1>Selected Countries: </h1>
              <div>
                <h4> {input?.idCountry.map((e) => e + " ,")}</h4>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Form;
