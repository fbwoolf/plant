import {
  SET_PLANT_IS_ALIVE,
  SET_PLANT_IS_NOT_ALIVE,
} from '../actions/plantActions';

const initState = {
  isAlive: false,
  width: 100,
  height: 100,
  growth: 0,
  growthGoal: 10,
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
    default:
      return state;
  }
};

export default plantReducer;
