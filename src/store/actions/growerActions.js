export const UPDATE_SUN = 'UPDATE_SUN';
export const UPDATE_WATER = 'UPDATE_WATER';
export const UPDATE_NUTRIENTS = 'UPDATE_NUTRIENTS';

export const checkSun = () => (dispatch, getState) => {
  const { grower: growerState } = getState();
  const sun = growerState.sun + 1;
  dispatch({
    type: UPDATE_SUN,
    payload: {
      sun,
    },
  });
};

export const checkWater = () => (dispatch, getState) => {
  const { grower: growerState } = getState();
  const water = growerState.water + 1;
  dispatch({
    type: UPDATE_WATER,
    payload: {
      water,
    },
  });
};

export const checkNutrients = () => (dispatch, getState) => {
  const { grower: growerState } = getState();
  const nutrients = growerState.nutrients + 1;
  dispatch({
    type: UPDATE_NUTRIENTS,
    payload: {
      nutrients,
    },
  });
};
