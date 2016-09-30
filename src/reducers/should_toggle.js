import { BUTTON_CLICK } from '../actions';

const buttonClick = (state = false, action) => {
  switch (action.type) {
    case BUTTON_CLICK:
      return !state;
    default:
      return state;
  }
};

export default buttonClick;
