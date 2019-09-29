import {
  updateSun,
  updateWater,
  updateNutrients,
} from '../../store/actions/growerActions';

import {
  checkPlantIsAlive,
  checkPlantCanGrow,
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
  updateSun: sun => dispatch(updateSun(sun)),
  updateWater: water => dispatch(updateWater(water)),
  updateNutrients: nutrients => dispatch(updateNutrients(nutrients)),
});
