import { UPDATE_SUN, UPDATE_WATER, UPDATE_NUTRIENTS } from './growerActions';

export const SET_PLANT_IS_ALIVE = 'SET_PLANT_IS_ALIVE';
export const SET_PLANT_IS_NOT_ALIVE = 'SET_PLANT_IS_NOT_ALIVE';
export const SET_PLANT_CAN_GROW = 'SET_PLANT_CAN_GROW';
export const SET_PLANT_CAN_NOT_GROW = 'SET_PLANT_CAN_NOT_GROW';
export const SET_PLANT_IS_FULLY_GROWN = 'SET_PLANT_IS_FULLY_GROWN';
export const SET_PLANT_IS_NOT_FULLY_GROWN = 'SET_PLANT_IS_NOT_FULLY_GROWN';
export const UPDATE_GROWTH = 'UPDATE_GROWTH';

export const setPlantIsAlive = () => ({
  type: SET_PLANT_IS_ALIVE,
  payload: {},
});

export const setPlantIsNotAlive = () => ({
  type: SET_PLANT_IS_NOT_ALIVE,
  payload: {},
});

export const setPlantCanGrow = () => ({
  type: SET_PLANT_CAN_GROW,
  payload: {},
});

export const setPlantCanNotGrow = () => ({
  type: SET_PLANT_CAN_NOT_GROW,
  payload: {},
});

export const setPlantIsFullyGrown = () => ({
  type: SET_PLANT_IS_FULLY_GROWN,
  payload: {},
});

export const setPlantIsNotFullyGrown = () => ({
  type: SET_PLANT_IS_NOT_FULLY_GROWN,
  payload: {},
});

export const updateGrowth = growth => dispatch => {
  dispatch({
    type: UPDATE_GROWTH,
    payload: {
      growth: growth + 1,
    },
  });
};

export const checkPlantGrowthGoal = growth => dispatch => {
  console.log('Here!');
  console.log(growth);
  // Rule:
  // If growth equals 7
  if (growth === 7) {
    dispatch(setPlantIsFullyGrown());
  } else {
    return;
  }
};

export const checkPlantIsAlive = () => (dispatch, getState) => {
  const { grower } = getState();
  const { sun, water, nutrients } = grower;
  // Rules:
  // sun cannot equal more than 2 more than water
  // water cannot equal more than 3
  // nutrients cannot equal more than 1 more than sun
  if (sun > water + 2 || water > 3 || nutrients > sun + 1) {
    dispatch(setPlantIsNotAlive());
  } else {
    dispatch(setPlantIsAlive());
  }
};

export const checkPlantCanGrow = () => (dispatch, getState) => {
  const { grower, plant } = getState();
  const { sun, water, nutrients } = grower;
  const { growth } = plant;
  // Rule:
  // Can grow if sun is equal to 2
  // And, water is equal to 3
  // And, nutrients is equal to 1
  if (sun === 2 && water === 3 && nutrients === 1) {
    dispatch(setPlantCanGrow());
    dispatch(updateGrowth(growth));
    dispatch({ type: UPDATE_SUN, payload: { sun: 0 } });
    dispatch({ type: UPDATE_WATER, payload: { water: 0 } });
    dispatch({ type: UPDATE_NUTRIENTS, payload: { nutrients: 0 } });
  } else {
    dispatch(setPlantCanNotGrow());
  }
};
