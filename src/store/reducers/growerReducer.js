import {
  INCREASE_SUN,
  DECREASE_SUN,
  INCREASE_WATER,
  DECREASE_WATER,
  INCREASE_NUTRIENTS,
  DECREASE_NUTRIENTS,
} from '../actions/growerActions';

const initState = {
  sun: 0,
  water: 0,
  nutrients: 0,
};

const growerReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREASE_SUN:
      return {
        ...state,
        sun: action.sun,
      };
    case DECREASE_SUN:
      return {
        ...state,
        sun: action.sun,
      };
    case INCREASE_WATER:
      return {
        ...state,
        water: action.water,
      };
    case DECREASE_WATER:
      return {
        ...state,
        water: action.water,
      };
    case INCREASE_NUTRIENTS:
      return {
        ...state,
        nutrients: action.nutrients,
      };
    case DECREASE_NUTRIENTS:
      return {
        ...state,
        nutrients: action.nutrients,
      };
    default:
      return state;
  }
};

export default growerReducer;
