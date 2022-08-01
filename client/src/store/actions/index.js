import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_DETAILS_COUNTRY = "GET_DETAILS_COUNTRY";

export function getCountries() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/api/countries")
      .then((country) => {
        dispatch({
          type: GET_COUNTRIES,
          payload: country.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function getDetailsCountry(id) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/api/countries/${id}`)
      .then((detail) => {
        dispatch({
          type: GET_DETAILS_COUNTRY,
          payload: detail.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
