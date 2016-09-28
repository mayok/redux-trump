export const INCREMENT = 'INCREMENT';
export const COMPARE = 'COMPARE';
export const DEAL = 'DEAL';
export const DROP = 'DROP';

export const increment = () => ({
  type: INCREMENT,
});

export const compare = (whether) => ({
  type: COMPARE,
  whether
});

export const deal = () => ({
  type: DEAL,
});

export const drop = () => ({
  type: DROP,
});


export const finish = () => {
  const result = (getState) => {
    const state = getState();
    return state.count;
  };
  return result;
};

export const update = (whether) => {
  if (whether) {
    return (dispatch) => {
      dispatch(update());
      dispatch(deal());
    };
  }
  return (dispatch) => {
    dispatch(finish());
  };
};
