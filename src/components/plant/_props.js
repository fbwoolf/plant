import {
  setPlantIsAlive,
  setPlantIsNotAlive,
} from '../../store/actions/plantActions';

export const mapStateToProps = state => {
  return {
    isAlive: state.plant.isAlive,
  };
};

export const mapDispatchToProps = dispatch => ({
  setPlantIsAlive: () => dispatch(setPlantIsAlive()),
  setPlantIsNotAlive: () => dispatch(setPlantIsNotAlive()),
});
