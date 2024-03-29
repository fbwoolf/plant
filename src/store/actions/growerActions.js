export const UPDATE_SUN = 'UPDATE_SUN';
export const UPDATE_WATER = 'UPDATE_WATER';
export const UPDATE_NUTRIENTS = 'UPDATE_NUTRIENTS';
export const RESET_GROWER = 'RESET_GROWER';

export const updateSun = sun => (dispatch, getState) => {
  const { grower } = getState();
  dispatch({
    type: UPDATE_SUN,
    payload: {
      sun: sun + 1,
    },
  });
  dispatch({
    type: UPDATE_WATER,
    payload: {
      water: grower.water - 1,
    },
  });
};

export const updateWater = water => (dispatch, getState) => {
  const { grower } = getState();
  dispatch({
    type: UPDATE_WATER,
    payload: {
      water: water + 1,
    },
  });
  dispatch({
    type: UPDATE_SUN,
    payload: {
      sun: grower.sun !== 0 ? grower.sun - 1 : 0,
    },
  });
  dispatch({
    type: UPDATE_NUTRIENTS,
    payload: {
      nutrients: grower.nutrients !== 0 ? grower.nutrients - 1 : 0,
    },
  });
};

export const updateNutrients = nutrients => dispatch => {
  dispatch({
    type: UPDATE_NUTRIENTS,
    payload: {
      nutrients: nutrients + 1,
    },
  });
};

export const resetGrower = () => dispatch => {
  dispatch({ type: RESET_GROWER, payload: {} });
};
