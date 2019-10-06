import {
  resetDialogOpen,
  resetDialogClosed,
  resetGame,
} from '../../store/actions/gameActions';

export const mapStateToProps = state => {
  const { game, plant } = state;
  return {
    resetDialogIsOpen: game.resetDialogIsOpen,
    isFullyGrown: plant.isFullyGrown,
    growth: plant.growth,
    color: plant.color,
  };
};

export const mapDispatchToProps = dispatch => ({
  resetDialogOpen: () => dispatch(resetDialogOpen()),
  resetDialogClosed: () => dispatch(resetDialogClosed()),
  resetGame: () => dispatch(resetGame()),
});
