import { UPDATE } from '../actions';

const count = (state = 0, action) => {
  switch (action.type) {
    case UPDATE:
      return action.bool ? state + 1 : state;
    default:
      return state;
  }
};

export default count;
