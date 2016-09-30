import { UPDATE, BUTTON_CLICK, DEAL } from '../actions';

const initialState = {
  win: false,
  table: {
    hand: {},
    selected: {},
  },
  stock: [
    // From top, Hearts, Diamonds, Clubs, Spades
    { mark: 'h', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
    { mark: 'd', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
    { mark: 'c', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
    { mark: 's', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
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
    hand: state.table.hand,
    selected: selectCard(state.stock),
  };
};

const compare = (state = {}, action) => {
  if (action.text === 'HIGH') {
    return (
      state.hand.number > state.selected.number
    );
  }
  return (
    state.hand.number < state.selected.number
  );
};

const updateStock = (state = {}) => {
  const mark = state.table.selected.mark;
  const number = state.table.selected.number;

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
    return stock.filter(s => s.mark !== mark);
  }
  return stock;
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
    case BUTTON_CLICK:
      switch (action.text) {
        case 'HIGH':
        case 'LOW':
          return {
            ...state,
            win: compare(state.table, action),
          };
        default:
          return state;
      }
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
