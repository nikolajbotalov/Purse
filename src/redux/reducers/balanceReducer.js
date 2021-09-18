const ADD_BALANCE_ITEM = 'ADD_BALANCE_ITEM';

const initialState = {
  balanceItem: [
    {
      balanceName: 'ВТБ',
      balance: 2000,
    },
  ],
  costs: [
    {
      paidItemName: 'Мобильная связь',
      price: 150,
    },
  ],
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
    default:
      return state;
  }
};

export default balanceReducer;
