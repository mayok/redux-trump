import { combineReducers } from 'redux';
import count from './count';
import cards from './cards';

const rootReducers = combineReducers({
  count,
  cards,
});

export default rootReducers;
