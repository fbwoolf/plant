import { combineReducers } from 'redux';
import plantReducer from './plantReducer';
import growerReducer from './growerReducer';
import gameReducer from './gameReducer';

const rootReducer = combineReducers({
  grower: growerReducer,
  plant: plantReducer,
  game: gameReducer,
});

export default rootReducer;
