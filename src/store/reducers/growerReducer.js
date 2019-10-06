import {
  UPDATE_SUN,
  UPDATE_WATER,
  UPDATE_NUTRIENTS,
  RESET_GROWER,
} from '../actions/growerActions';

const initState = {
  sun: 0,
  water: 0,
  nutrients: 0,
};

const growerReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_SUN:
      return {
        ...state,
        sun: action.payload.sun,
      };
    case UPDATE_WATER:
      return {
        ...state,
        water: action.payload.water,
      };
    case UPDATE_NUTRIENTS:
      return {
        ...state,
        nutrients: action.payload.nutrients,
      };
    case RESET_GROWER:
      return {
        ...state,
        sun: 0,
        water: 0,
        nutrients: 0,
      };
    default:
      return state;
  }
};

export default growerReducer;
