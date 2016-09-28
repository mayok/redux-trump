import { DROP } from '../actions';

const update = (state = {}, action) => {
  switch (action.type) {
    case DROP:
      return {
        hand: state.selected,
        selected: {},
      }
    default:
      return state
  }
}

export default update;
