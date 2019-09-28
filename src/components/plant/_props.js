import {
  increaseSun,
  decreaseSun,
  increaseWater,
  decreaseWater,
  increaseNutrients,
  decreaseNutrients,
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
  increaseSun: () => dispatch(increaseSun()),
  decreaseSun: () => dispatch(decreaseSun()),
  increaseWater: () => dispatch(increaseWater()),
  decreaseWater: () => dispatch(decreaseWater()),
  increaseNutrients: () => dispatch(increaseNutrients()),
  decreaseNutrients: () => dispatch(decreaseNutrients()),
});
