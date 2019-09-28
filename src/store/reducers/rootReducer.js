import { combineReducers } from 'redux';
import plantReducer from './plantReducer';

const rootReducer = combineReducers({
  plant: plantReducer,
});

export default rootReducer;
