import {
  SET_PLANT_IS_ALIVE,
  SET_PLANT_IS_NOT_ALIVE,
  SET_PLANT_CAN_GROW,
  SET_PLANT_CAN_NOT_GROW,
  SET_PLANT_IS_FULLY_GROWN,
  UPDATE_GROWTH,
} from '../actions/plantActions';

const initState = {
  isAlive: true,
  canGrow: false,
  isFullyGrown: false,
  growth: 1,
};

const plantReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_PLANT_IS_ALIVE:
      return {
        ...state,
        isAlive: true,
      };
    case SET_PLANT_IS_NOT_ALIVE:
      return {
        ...state,
        isAlive: false,
      };
    case SET_PLANT_CAN_GROW:
      return {
        ...state,
        canGrow: true,
      };
    case SET_PLANT_CAN_NOT_GROW:
      return {
        ...state,
        canGrow: false,
      };
    case SET_PLANT_IS_FULLY_GROWN:
      return {
        ...state,
        isFullyGrown: true,
      };
    case UPDATE_GROWTH:
      return {
        ...state,
        growth: action.payload.growth,
      };
    default:
      return state;
  }
};

export default plantReducer;
