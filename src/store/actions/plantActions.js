import { UPDATE_SUN, UPDATE_WATER, UPDATE_NUTRIENTS, resetGame } from './growerActions';

export const SET_PLANT_IS_ALIVE = 'SET_PLANT_IS_ALIVE';
export const SET_PLANT_IS_NOT_ALIVE = 'SET_PLANT_IS_NOT_ALIVE';
export const SET_PLANT_CAN_GROW = 'SET_PLANT_CAN_GROW';
export const SET_PLANT_CAN_NOT_GROW = 'SET_PLANT_CAN_NOT_GROW';
export const SET_PLANT_IS_FULLY_GROWN = 'SET_PLANT_IS_FULLY_GROWN';
export const SET_PLANT_IS_NOT_FULLY_GROWN = 'SET_PLANT_IS_NOT_FULLY_GROWN';
export const UPDATE_GROWTH = 'UPDATE_GROWTH';
export const UPDATE_HEALTH = 'UPDATE_HEALTH';

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

export const incrementHealth = health => dispatch => {
  dispatch({
    type: UPDATE_HEALTH,
    payload: {
      health: health + 1,
    },
  });
};

export const decrementHealth = health => dispatch => {
  dispatch({
    type: UPDATE_HEALTH,
    payload: {
      health: health - 1,
    },
  });
};

export const checkPlantGrowthGoal = growth => dispatch => {
  // Rule:
  // If growth equals 7
  if (growth === 7) {
    dispatch(setPlantIsFullyGrown());
  } else {
    return;
  }
};

export const checkPlantIsAlive = () => (dispatch, getState) => {
  const { grower, plant } = getState();
  const { sun, water, nutrients } = grower;
  const { health } = plant;
  // Rules:
  // sun cannot equal 2 more than water
  // water cannot equal 2 more than the sun
  // nutrients cannot equal 2 more than water
  const isSick = sun > water + 2 || water > sun + 3 || nutrients > water + 2
  if (isSick) {
    dispatch(setPlantIsNotAlive());
    dispatch(decrementHealth(health));
  } else {
    dispatch(setPlantIsAlive());
    if (health <= 5){
      dispatch(incrementHealth(health));
    }
  }
};

export const checkPlantCanGrow = () => (dispatch, getState) => {
  const { grower, plant } = getState();
  const { sun, water, nutrients } = grower;
  const { growth } = plant;
  // Rule:
  // Can grow if sun is equal water
  // And, water is great than or equal to 2
  // And, nutrients is equal to 1 less than water
  if (sun === water && water >= 2 && nutrients === water - 1) {
    dispatch(setPlantCanGrow());
    dispatch(updateGrowth(growth));
    dispatch({ type: UPDATE_SUN, payload: { sun: 0 } });
    dispatch({ type: UPDATE_WATER, payload: { water: 0 } });
    dispatch({ type: UPDATE_NUTRIENTS, payload: { nutrients: 0 } });
  } else {
    dispatch(setPlantCanNotGrow());
  }
};

export const checkHealthScore = health => dispatch => {
  if (health === 0) {
    dispatch(resetGame());
  }
}
