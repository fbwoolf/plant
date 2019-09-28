import {
  checkSun,
  checkWater,
  checkNutrients,
} from '../../store/actions/growerActions';

import {
  setPlantIsAlive,
  setPlantIsNotAlive,
} from '../../store/actions/plantActions';

export const mapStateToProps = state => {
  const { grower, plant } = state;
  return {
    sun: grower.sun,
    water: grower.water,
    nutrients: grower.nutrients,
    isAlive: plant.isAlive,
    growth: plant.growth,
    growthGoal: plant.growthGoal,
  };
};

export const mapDispatchToProps = dispatch => ({
  setPlantIsAlive: () => dispatch(setPlantIsAlive()),
  setPlantIsNotAlive: () => dispatch(setPlantIsNotAlive()),
  checkSun: () => dispatch(checkSun()),
  checkWater: () => dispatch(checkWater()),
  checkNutrients: () => dispatch(checkNutrients()),
});
