export const BUTTON_CLICK = 'BUTTON_CLICK';
export const DEAL = 'DEAL';
export const UPDATE = 'UPDATE';

export const buttonClick = text => ({
  type: BUTTON_CLICK,
  text,
});

export const deal = () => ({
  type: DEAL,
});

export const update = bool => ({
  type: UPDATE,
  bool,
});

export const checkUpdate = () =>
  (dispatch, getState) => {
    const state = getState();
    return dispatch(update(state.cards.win));
  };
