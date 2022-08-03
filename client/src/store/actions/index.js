import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_DETAILS_COUNTRY = "GET_DETAILS_COUNTRY";
export const SEARCH_COUNTRY_NAME = "SEARCH_COUNTRY_NAME";
export const CLEAR_PAGE = "CLEAR_PAGE";

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

export function getNameCountry(name) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/api/countries?name=${name}`)
      .then((resp) => {
        dispatch({
          type: SEARCH_COUNTRY_NAME,
          payload: resp.data,
        });
      })
      .catch((err) => console.log(err));
  };
}

export function clearPage() {
  return {
    type: CLEAR_PAGE,
  };
}
