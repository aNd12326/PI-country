import {
  GET_COUNTRIES,
  GET_DETAILS_COUNTRY,
  SEARCH_COUNTRY_NAME,
  CLEAR_PAGE,
  POST_ACTIVITY,
  SORT_COUNTRY,
  SORT_BY_CONTINENT,
  FILTER_ACTIVITY,
  GET_ACTIVITIES,
  FILTER_AREA,
  RESET_ALL_FILTERS,
} from "../actions";

const initialState = {
  countries: [],
  details: [],
  copiaCountries: [],
  getActvities: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: payload,
        copiaCountries: payload,
      };
    case GET_DETAILS_COUNTRY:
      return {
        ...state,
        details: payload,
      };
    case SEARCH_COUNTRY_NAME:
      return {
        ...state,
        countries: payload,
      };
    case CLEAR_PAGE:
      return {
        ...state,
        countries: [],
        details: [],
        copiaCountries: [],
      };
    case POST_ACTIVITY:
      return {
        ...state,
      };
    case SORT_BY_CONTINENT:
      let filtered =
        payload === "reset"
          ? state.copiaCountries
          : state.copiaCountries.filter((e) => e.continent === payload);
      return {
        ...state,
        countries: filtered,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        getActvities: payload,
      };
    case FILTER_ACTIVITY:
      let filterAct =
        payload === "reset"
          ? state.copiaCountries
          : state.copiaCountries.filter(
            (e) =>
              e.activities &&
              e.activities.filter((ac) => ac.name === payload).length
          );
      return {
        ...state,
        countries: filterAct,
      };

    case FILTER_AREA:
      let filterArea = state.copiaCountries.filter(e => e.area > 20000)

      return {
        ...state,
        countries: filterArea
      }

    case RESET_ALL_FILTERS:
      return {
        ...state,
        countries: [...state.copiaCountries]
      }

    case SORT_COUNTRY:
      let sortedArr = [...state.countries];
      sortedArr = sortedArr.sort((a, b) => {
        if (payload === "ascendente") {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
        }
        if (payload === "descendente") {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
        }
        if (payload === "populationAsc") {
          return a.population - b.population;
        }
        if (payload === "populationDesc") {
          return b.population - a.population;
        }
        return 0;
      });
      return {
        ...state,
        countries: payload === "reset" ? state.copiaCountries : sortedArr,
      };
    default:
      return state;
  }
}
