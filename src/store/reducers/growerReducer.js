import {
  UPDATE_SUN,
  UPDATE_WATER,
  UPDATE_NUTRIENTS,
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
    default:
      return state;
  }
};

export default growerReducer;
