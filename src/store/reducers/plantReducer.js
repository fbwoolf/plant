import {
  SET_PLANT_IS_SICK,
  SET_PLANT_IS_NOT_SICK,
  SET_PLANT_CAN_GROW,
  SET_PLANT_CAN_NOT_GROW,
  SET_PLANT_IS_FULLY_GROWN,
  SET_PLANT_IS_NOT_FULLY_GROWN,
  UPDATE_GROWTH,
  UPDATE_HEALTH,
} from '../actions/plantActions';

const initState = {
  isSick: false,
  canGrow: false,
  isFullyGrown: false,
  growth: 1,
  health: 5,
};

const plantReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_PLANT_IS_SICK:
      return {
        ...state,
        isSick: true,
      };
    case SET_PLANT_IS_NOT_SICK:
      return {
        ...state,
        isSick: false,
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
    case SET_PLANT_IS_NOT_FULLY_GROWN:
      return {
        ...state,
        isFullyGrown: false,
      };
    case UPDATE_GROWTH:
      return {
        ...state,
        growth: action.payload.growth,
      };
    case UPDATE_HEALTH:
      return {
        ...state,
        health: action.payload.health,
      };
    default:
      return state;
  }
};

export default plantReducer;
