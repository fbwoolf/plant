import {
  updateSun,
  updateWater,
  updateNutrients,
} from '../../store/actions/growerActions';

import {
  checkPlantIsSick,
  checkPlantCanGrow,
} from '../../store/actions/plantActions';

export const mapStateToProps = state => {
  const { grower } = state;
  return {
    sun: grower.sun,
    water: grower.water,
    nutrients: grower.nutrients,
  };
};

export const mapDispatchToProps = dispatch => ({
  updateSun: sun => dispatch(updateSun(sun)),
  updateWater: water => dispatch(updateWater(water)),
  updateNutrients: nutrients => dispatch(updateNutrients(nutrients)),
  checkPlantIsSick: () => dispatch(checkPlantIsSick()),
  checkPlantCanGrow: () => dispatch(checkPlantCanGrow()),
});
