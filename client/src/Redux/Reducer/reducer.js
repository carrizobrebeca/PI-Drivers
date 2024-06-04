import {
  GET_DRIVERS,
  // GET_DRIVER,
  // GET_DRIVER_TEAM,
  GET_DRIVER_ID,
  PAGINATE,
  
  ORDER_DRIVERS,
  ORDER_BORN,
  // FILTER_TEAM,
} from "../Actions/actions-types";

let initialState = {
  allDrivers: [],
  allTeams: [],
  driverId: {},
  currentPage: 0,
  paginatedDrivers: [],
};

function rootReducer(state = initialState, action) {
  const ITEMS_PER_PAGE = 5;

  switch (action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        allDrivers: action.payload,

        paginatedDrivers: action.payload.slice(0, ITEMS_PER_PAGE),
      };
    case GET_DRIVER_ID:
      return {
        ...state,
        driverId: action.payload,
      };
    case PAGINATE:
      const { page } = action.payload;
      const startIndex = page * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      return {
        ...state,
        currentPage: page,
        paginatedDrivers: state.allDrivers.slice(startIndex, endIndex),
      };

    case ORDER_DRIVERS:
      let orderedDrivers;
      if (action.payload === "A") {
        // Orden ascendente por nombre
        orderedDrivers = state.allDrivers.slice().sort((a, b) => {
          return a.name.forename.localeCompare(b.name.forename);
        });
      } else {
        // Orden descendente por nombre
        orderedDrivers = state.allDrivers.slice().sort((a, b) => {
          return b.name.forename.localeCompare(a.name.forename);
        });
      }
      return {
        ...state,

        allDrivers: orderedDrivers,
      };

    case ORDER_BORN:
      let orderedDriversByBorn;
      if (action.payload === "ASC") {
        // Orden ascendente por fecha de nacimiento
        orderedDriversByBorn = state.allDrivers.slice().sort((a, b) => {
          return new Date(a.dob) - new Date(b.dob);
        });
      } else {
        // Orden descendente por fecha de nacimiento
        orderedDriversByBorn = state.allDrivers.slice().sort((a, b) => {
          return new Date(b.dob) - new Date(a.dob);
        });
      }
      return {
        ...state,
        allDrivers: orderedDriversByBorn,
      };

    default:
      return state;
  }
}

export default rootReducer;
