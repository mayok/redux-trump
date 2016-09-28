import { UPDATE, INCREMENT } from '../actions';

const count = (state = 0, action) => {
  switch (action.type) {
    case UPDATE:
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
};

export default count;
