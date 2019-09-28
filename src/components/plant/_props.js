import {
  updateSun,
  updateWater,
  updateNutrients,
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
  updateSun: sun => dispatch(updateSun(sun)),
  updateWater: water => dispatch(updateWater(water)),
  updateNutrients: nutrients => dispatch(updateNutrients(nutrients)),
});
