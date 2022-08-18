import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_DETAILS_COUNTRY = "GET_DETAILS_COUNTRY";
export const SEARCH_COUNTRY_NAME = "SEARCH_COUNTRY_NAME";
export const CLEAR_PAGE = "CLEAR_PAGE";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const SORT_COUNTRY = "SORT_COUNTRY";
export const SORT_BY_CONTINENT = "SORT_BY_CONTINENT";
export const FILTER_ACTIVITY = "FILTER_ACTIVITY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const FILTER_AREA = "FILTER_AREA";
export const RESET_ALL_FILTERS = "RESET_ALL_FILTERS";

export function getCountries() {
  return function (dispatch) {
    axios
      .get("/api/countries")
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
      .get(`/api/countries/${id}`)
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
      .get(`/api/countries?name=${name}`)
      .then((resp) => {
        dispatch({
          type: SEARCH_COUNTRY_NAME,
          payload: resp.data,
        });
      })
      .catch((err) => console.log(err));
  };
}

export function postActivity(payload) {
  return async function () {
    const response = await axios.post(
      `/api/activities`,
      payload
    );
    return response;
  };
}

export function clearPage() {
  return {
    type: CLEAR_PAGE,
  };
}

// ------------- Filtraciones -----------------
export function sortCountries(order) {
  return {
    type: SORT_COUNTRY,
    payload: order,
  };
}

export function sortByContinent(order) {
  return {
    type: SORT_BY_CONTINENT,
    payload: order,
  };
}

export function getActivities() {
  return function (dispatch) {
    axios
      .get("/api/activities")
      .then((activities) => {
        dispatch({
          type: GET_ACTIVITIES,
          payload: activities.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function filterActivities(activity) {
  return {
    type: FILTER_ACTIVITY,
    payload: activity,
  };
}

export function filterArea(payload) {
  return {
    type: FILTER_AREA,
    payload
  };
}

export function resetAllFilters(payload) {
  return {
    type: RESET_ALL_FILTERS,
    payload
  };
}
