import {
  updateSun,
  updateWater,
  updateNutrients,
  resetGame,
} from '../../store/actions/growerActions';

import {
  checkPlantIsAlive,
  checkPlantCanGrow,
  checkPlantGrowthGoal,
} from '../../store/actions/plantActions';

export const mapStateToProps = state => {
  const { grower, plant } = state;
  return {
    sun: grower.sun,
    water: grower.water,
    nutrients: grower.nutrients,
    isAlive: plant.isAlive,
    growth: plant.growth,
    isFullyGrown: plant.isFullyGrown,
  };
};

export const mapDispatchToProps = dispatch => ({
  checkPlantIsAlive: () => dispatch(checkPlantIsAlive()),
  checkPlantCanGrow: () => dispatch(checkPlantCanGrow()),
  checkPlantGrowthGoal: growth => dispatch(checkPlantGrowthGoal(growth)),
  updateSun: sun => dispatch(updateSun(sun)),
  updateWater: water => dispatch(updateWater(water)),
  updateNutrients: nutrients => dispatch(updateNutrients(nutrients)),
  resetGame: () => dispatch(resetGame()),
});
