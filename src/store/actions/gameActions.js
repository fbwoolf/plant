import { resetGrower } from './growerActions';
import { resetPlant } from './plantActions';

export const RESET_DIALOG_OPEN = 'RESET_DIALOG_OPEN';
export const RESET_DIALOG_CLOSED = 'RESET_DIALOG_CLOSED';

export const resetDialogOpen = () => ({
  type: RESET_DIALOG_OPEN,
  payload: {},
});

export const resetDialogClosed = () => ({
  type: RESET_DIALOG_CLOSED,
  payload: {},
});

export const resetGame = () => dispatch => {
  dispatch(resetGrower());
  dispatch(resetPlant());
};
