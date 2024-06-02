//importar acions-types

import axios from "axios";
import { GET_DRIVERS } from "../Actions/actions-types";
// import { ORDER_DRIVERS, SEARCH_DRIVER } from "../Actions/actions-types";

//definir estado inicial del estado global
let initialState = {
  allDrivers: [],
  // allTeams: [],
  // filterDriver: false,
  // currentPage: 0,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DRIVERS:
      return { ...state, allDrivers: action.payload };

    default:
      return { ...state };
  }
}

export default rootReducer;
