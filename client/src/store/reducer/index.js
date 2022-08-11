import { ASCENDENTE, DESCENDENTE, POPULATION_ASC, POPULATION_DESC } from "../../components/costantes/sort";
import {
  GET_COUNTRIES,
  GET_DETAILS_COUNTRY,
  SEARCH_COUNTRY_NAME,
  CLEAR_PAGE,
  POST_ACTIVITY,
  SORT_COUNTRY,
  SORT_BY_CONTINENT,
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
        copiaCountries: payload
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
        copiaCountries: payload,
      };
    case CLEAR_PAGE:
      return {
        ...state,
        countries: [],
        details: [],
        copiaCountries: []
      };
    case POST_ACTIVITY:
      return {
        ...state,
      };
    case SORT_BY_CONTINENT:
      let allCountries = [...state.copiaCountries]
      let filtered;
      if (payload === 'NorthAmerica') {
        filtered = allCountries.filter(e => e.continent === 'North America')
      } else if (payload === 'Asia') {
        filtered = allCountries.filter(e => e.continent === 'Asia')
      } else if (payload === 'Oceania') {
        filtered = allCountries.filter(e => e.continent === 'Oceania')
      } else if (payload === 'Europe') {
        filtered = allCountries.filter(e => e.continent === 'Europe')
      } else if (payload === 'Antarctica') {
        filtered = allCountries.filter(e => e.continent === 'Antarctica')
      } else if (payload === 'Africa') {
        filtered = allCountries.filter(e => e.continent === 'Africa')
      } else if (payload === 'SouthAmerica') {
        filtered = allCountries.filter(e => e.continent === 'South America')
      }
      return {
        ...state,
        copiaCountries: payload === 'reset' ? state.countries : filtered
      };
    case SORT_COUNTRY:
      let sortedArr = [...state.copiaCountries];
      sortedArr = sortedArr.sort((a, b) => {
        // if (a.name < b.name) {
        //   return payload === ASCENDENTE ? -1 : 1;
        // }
        // if (a.name > b.name) {
        //   return payload === DESCENDENTE ? -1 : 1;
        // }
        if (payload === 'ascendente') {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
        }
        if (payload === 'descendente') {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
        }
        if (payload === 'populationAsc') {
          return a.population - b.population
        }
        if (payload === 'populationDesc') {
          return b.population - a.population
        }
        return 0
      });
      return {
        ...state,
        copiaCountries: payload === 'reset' ? state.countries : sortedArr
      };
    default:
      return state;
  }
}
