const CREATE_BALANCE_ITEM = 'CREATE_BALANCE_ITEM';
const EDIT_BALANCE_ITEM = 'EDIT_BALANCE_ITEM';
const REMOVE_BALANCE_ITEM = 'REMOVE_BALANCE_ITEM';
const ADD_COST_ITEM = 'ADD_COST_ITEM';
const ADD_INCOME_ITEM = 'ADD_INCOME_ITEM';

// TODO: переименовать переменную costs, не отображает суть

const initialState = {
  balanceItem: [],
  totalBalance: 0,
};

// Метод для добавления расхода\дохода
const changeBalanceItem = ({ paidData, balanceName, link }, arr, sign) => {
  const balance = arr.find((fn) => (fn.balanceName === balanceName ? fn.balance : null));

  if (!balance.costs) {
    balance.costs = [
      {
        paidItemName: paidData.paidItemName,
        price: paidData.price,
        paidType: link,
      },
    ];
  } else {
    balance.costs = [
      ...balance.costs,
      {
        paidItemName: paidData.paidItemName,
        price: paidData.price,
        paidType: link,
      },
    ];
  }

  if (sign === '-=') {
    balance.balance -= paidData.price;
  } else {
    balance.balance = +paidData.price + Number.parseFloat(balance.balance);
  }

  return balance.balance;
};

// Метод для изменения названия списка счета
const editBalanceName = ({ newName, balanceName }, arr) => {
  const newBalanceName = arr.find((item) =>
    item.balanceName === balanceName ? (item.balanceName = newName) : item.balanceName,
  );
  return newBalanceName.balanceName;
};

// Метод для удаления списка счета
// TODO: метод не работает, возможно методом пользоваться не стоит
const removeBalanceItem = (balanceName, arr) => {
  const removeItem = arr.find((item) => {
    if (item.balanceName === balanceName) {
      return;
    }
  });

  console.log(removeItem);
};

const balanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BALANCE_ITEM:
      return {
        ...state,
        balanceItem: [...state.balanceItem, action.payload],
        totalBalance: +action.payload.balance + state.totalBalance,
      };
    case EDIT_BALANCE_ITEM:
      return {
        ...state,
        editBalanceName: editBalanceName(action.payload, [...state.balanceItem]),
      };
    case REMOVE_BALANCE_ITEM:
      // not working
      return {
        ...state,
        removeBalanceItem: removeBalanceItem(action.payload, [...state.balanceItem]),
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
