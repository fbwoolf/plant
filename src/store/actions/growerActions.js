export const INCREASE_SUN = 'INCREASE_SUN';
export const DECREASE_SUN = 'DECREASE_SUN';
export const INCREASE_WATER = 'INCREASE_WATER';
export const DECREASE_WATER = 'DECREASE_WATER';
export const INCREASE_NUTRIENTS = 'INCREASE_NUTRIENTS';
export const DECREASE_NUTRIENTS = 'DECREASE_NUTRIENTS';

export const increaseSun = () => (dispatch, getState) => {
  const { grower: growerState } = getState();
  const sun = growerState.sun + 1;
  dispatch({
    type: INCREASE_SUN,
    payload: {
      sun,
    },
  });
};

export const decreaseSun = () => (dispatch, getState) => {
  const { grower: growerState } = getState();
  const sun = growerState.sun - 1;
  dispatch({
    type: DECREASE_SUN,
    payload: {
      sun,
    },
  });
};

export const increaseWater = () => (dispatch, getState) => {
  const { grower: growerState } = getState();
  const water = growerState.water + 1;
  dispatch({
    type: INCREASE_WATER,
    payload: {
      water,
    },
  });
};

export const decreaseWater = () => (dispatch, getState) => {
  const { grower: growerState } = getState();
  const water = growerState.water - 1;
  dispatch({
    type: DECREASE_WATER,
    payload: {
      water,
    },
  });
};

export const increaseNutrients = () => (dispatch, getState) => {
  const { grower: growerState } = getState();
  const nutrients = growerState.nutrients + 1;
  dispatch({
    type: INCREASE_NUTRIENTS,
    payload: {
      nutrients,
    },
  });
};

export const decreaseNutrients = () => (dispatch, getState) => {
  const { grower: growerState } = getState();
  const nutrients = growerState.nutrients - 1;
  dispatch({
    type: DECREASE_NUTRIENTS,
    payload: {
      nutrients,
    },
  });
};
