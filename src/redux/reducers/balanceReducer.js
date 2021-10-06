const CREATE_BALANCE_ITEM = 'CREATE_BALANCE_ITEM';
const ADD_COST_ITEM = 'ADD_COST_ITEM';
const ADD_INCOME_ITEM = 'ADD_INCOME_ITEM';

const initialState = {
  balanceItem: [],
  costs: [],
  totalBalance: 0,
};

const changeBalanceItem = (data, arr, sign) => {
  const balance = arr.find((fn) => (fn.balanceName === data.balanceName ? fn.balance : null));
  if (sign === '-=') {
    balance.balance -= data.paidData.price;
  } else {
    balance.balance = +data.paidData.price + balance.balance;
  }

  return balance.balance;
};

const balanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BALANCE_ITEM:
      return {
        ...state,
        balanceItem: [...state.balanceItem, action.payload],
        totalBalance: +action.payload.balance + state.totalBalance,
      };
    case ADD_COST_ITEM: {
      return {
        ...state,
        changeBalanceItem: changeBalanceItem(action.payload, [...state.balanceItem], '-='),
        totalBalance: state.totalBalance - action.payload.paidData.price,
      };
    }
    case ADD_INCOME_ITEM: {
      return {
        ...state,
        changeBalanceItem: changeBalanceItem(action.payload, [...state.balanceItem], '+='),
        totalBalance: +action.payload.paidData.price + state.totalBalance,
      };
    }
    default:
      return state;
  }
};

export default balanceReducer;
