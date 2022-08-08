import {
  GET_COUNTRIES,
  GET_DETAILS_COUNTRY,
  SEARCH_COUNTRY_NAME,
  CLEAR_PAGE,
  POST_ACTIVITY,
} from "../actions";

const initialState = {
  countries: [],
  details: [],
  copiaCountries: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: payload,
      };
    case GET_DETAILS_COUNTRY:
      return {
        ...state,
        details: payload,
      };
    case SEARCH_COUNTRY_NAME:
      // if (payload.error) {
      //   alert(payload.error);
      //   return state;
      // }
      return {
        ...state,
        countries: payload,
      };
    case CLEAR_PAGE:
      return {
        ...state,
        countries: [],
        details: [],
      };
    case POST_ACTIVITY:
      return {
        ...state,
      };
    default:
      return state;
  }
}
