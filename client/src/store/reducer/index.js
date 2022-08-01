import { GET_COUNTRIES, GET_DETAILS_COUNTRY } from "../actions";

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
    default:
      return state;
  }
}
