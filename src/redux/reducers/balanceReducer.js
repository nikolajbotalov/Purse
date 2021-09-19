const ADD_BALANCE_ITEM = 'ADD_BALANCE_ITEM';
const ADD_COST_ITEM = 'ADD_COST_ITEM';

const initialState = {
  balanceItem: [],
  costs: [],
  totalBalance: 0,
};

const balanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BALANCE_ITEM:
      return {
        ...state,
        balanceItem: [...state.balanceItem, action.payload],
        totalBalance: +action.payload.balance + state.totalBalance,
      };
    case ADD_COST_ITEM: {
      return {
        ...state,
        costs: [...state.costs, action.payload],
      };
    }
    default:
      return state;
  }
};

export default balanceReducer;
