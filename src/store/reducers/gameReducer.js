import { RESET_DIALOG_OPEN, RESET_DIALOG_CLOSED } from '../actions/gameActions';

const initState = {
  resetDialogIsOpen: false,
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case RESET_DIALOG_OPEN:
      return {
        ...state,
        resetDialogIsOpen: true,
      };
    case RESET_DIALOG_CLOSED:
      return {
        ...state,
        resetDialogIsOpen: false,
      };
    default:
      return state;
  }
};

export default gameReducer;
