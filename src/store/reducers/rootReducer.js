import { combineReducers } from 'redux';
import plantReducer from './plantReducer';
import growerReducer from './growerReducer';

const rootReducer = combineReducers({
  grower: growerReducer,
  plant: plantReducer,
});

export default rootReducer;
