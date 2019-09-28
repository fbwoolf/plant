export const SET_PLANT_IS_ALIVE = 'SET_PLANT_IS_ALIVE';
export const SET_PLANT_IS_NOT_ALIVE = 'SET_PLANT_IS_NOT_ALIVE';

export const setPlantIsAlive = () => ({
  type: SET_PLANT_IS_ALIVE,
  payload: {},
});

export const setPlantIsNotAlive = () => ({
  type: SET_PLANT_IS_NOT_ALIVE,
  payload: {},
});

export const checkPlantIsAlive = () => (dispatch, getState) => {
  const { grower } = this.getState();
  const { sun, water, nutrients } = grower;
  // Rules:
  // sun cannot equal more than 2
  // water cannot equal more than 2
  // nutrients cannot equal more than 2
  if (sun > 2 || water > 2 || nutrients > 2) {
    dispatch(setPlantIsNotAlive());
  }
};
