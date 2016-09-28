import { UPDATE, COMPARE, DEAL } from '../actions';

const initialState = {
  win: false,
  table: {
    hand: {},
    selected: {},
  },
  stock: [
    // From top, Hearts, Diamonds, Clubs, Spades
    { mark: 'Hearts', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
    { mark: 'Diamonds', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
    { mark: 'Clubs', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
    { mark: 'Spades', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
  ],
};

const selectCard = (stock) => {
  const subset = stock[Math.floor(Math.random() * stock.length)];
  const mark = subset.mark;
  const number = subset.numbers[Math.floor(Math.random() * subset.numbers.length)];

  return {
    mark,
    number,
  };
};

const deal = (state) => {
  if (Object.keys(state.table.hand).length === 0) {
    return {
      hand: selectCard(state.stock),
      selected: selectCard(state.stock),
    };
  }
  return {
    selected: selectCard(state.stock),
  };
};

const compare = (state = {}, action) => {
  if (action.whether === 1) {
    return (
      state.hand.number > state.selected.number
    );
  }
  return (
    state.hand.number < state.selected.number
  );
};

const updateStock = (state = {}) => {
  const mark = state.selected.mark;
  const number = state.selected.number;

  const numbers = state.stock
    .find(s => s.mark === mark).numbers
    .filter(v => v !== number);

  const stock = state.stock.map((s) => {
    const subset = s;
    if (subset.mark === mark) {
      subset.numbers = numbers;
    }
    return subset;
  });

  if (numbers.length === 0) {
    return {
      stock: stock.filter(s => s.mark !== mark),
    };
  }
  return {
    stock,
  };
};

const updateTable = (state = {}) => ({
  hand: state.selected,
  selected: {},
});

const cards = (state = initialState, action) => {
  switch (action.type) {
    case DEAL:
      return {
        ...state,
        table: deal(state),
      };
    case COMPARE:
      return {
        ...state,
        win: compare(state.table, action),
      };
    case UPDATE:
      return {
        ...state,
        stock: updateStock(state, action),
        table: updateTable(state.table, action),
      };
    default:
      return state;
  }
};

export default cards;
