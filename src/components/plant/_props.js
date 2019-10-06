import {
  checkPlantGrowthGoal,
  checkPlantHealthScore,
} from '../../store/actions/plantActions';

export const mapStateToProps = state => {
  const { plant } = state;
  return {
    isFullyGrown: plant.isFullyGrown,
    growth: plant.growth,
    health: plant.health,
    color: plant.color,
  };
};

export const mapDispatchToProps = dispatch => ({
  checkPlantGrowthGoal: growth => dispatch(checkPlantGrowthGoal(growth)),
  checkPlantHealthScore: health => dispatch(checkPlantHealthScore(health)),
});
