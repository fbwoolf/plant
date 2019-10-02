import {
  updateSun,
  updateWater,
  updateNutrients,
  resetGame,
} from '../../store/actions/growerActions';

import {
  checkPlantIsSick,
  checkPlantCanGrow,
  checkPlantGrowthGoal,
  checkHealthScore,
} from '../../store/actions/plantActions';

export const mapStateToProps = state => {
  const { grower, plant } = state;
  return {
    sun: grower.sun,
    water: grower.water,
    nutrients: grower.nutrients,
    isSick: plant.isSick,
    growth: plant.growth,
    health: plant.health,
    isFullyGrown: plant.isFullyGrown,
  };
};

export const mapDispatchToProps = dispatch => ({
  checkPlantIsSick: () => dispatch(checkPlantIsSick()),
  checkPlantCanGrow: () => dispatch(checkPlantCanGrow()),
  checkPlantGrowthGoal: growth => dispatch(checkPlantGrowthGoal(growth)),
  updateSun: sun => dispatch(updateSun(sun)),
  updateWater: water => dispatch(updateWater(water)),
  updateNutrients: nutrients => dispatch(updateNutrients(nutrients)),
  resetGame: () => dispatch(resetGame()),
  checkHealthScore: health => dispatch(checkHealthScore(health)),
});
