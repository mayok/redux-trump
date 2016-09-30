import { combineReducers } from 'redux';
import shouldToggle from './should_toggle';
import count from './count';
import cards from './cards';

const rootReducers = combineReducers({
  shouldToggle,
  count,
  cards,
});

export default rootReducers;
