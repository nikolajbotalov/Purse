const ADD_BALANCE_ITEM = 'ADD_BALANCE_ITEM';

const initialState = {
  balanceItem: [],
};

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BALANCE_ITEM:
      return {
        ...state,
        balanceItem: [...state.balanceItem, action.payload],
      };

    default:
      return state;
  }
};

export default budgetReducer;

// const CREATE_SOURCE_BALANCE = 'CREATE_SOURCE_BALANCE';
// const EDIT_SOURCE_BALANCE = 'EDIT_SOURCE_BALANCE';
// const REMOVE_SOURCE_BALANCE = 'REMOVE_SOURCE_BALANCE';
// const ADD_COST_ITEM = 'ADD_COST_ITEM';
// const ADD_INCOME_ITEM = 'ADD_INCOME_ITEM';

// const initialState = {
//   sourceBalance: [],
//   totalBalance: 0,
// };

// Метод для добавления расхода\дохода
// const changeBalanceItem = ({ paidData, balanceName, link }, arr, sign) => {
//   const balance = arr.find((fn) => (fn.balanceName === balanceName ? fn.balance : null));

//   if (!balance.costs) {
//     balance.costs = [
//       {
//         paidItemName: paidData.paidItemName,
//         price: paidData.price,
//         paidType: link,
//       },
//     ];
//   } else {
//     balance.costs = [
//       ...balance.costs,
//       {
//         paidItemName: paidData.paidItemName,
//         price: paidData.price,
//         paidType: link,
//       },
//     ];
//   }

//   if (sign === '-=') {
//     balance.balance -= paidData.price;
//   } else {
//     balance.balance = +paidData.price + Number.parseFloat(balance.balance);
//   }

//   return balance.balance;
// };

// // Метод для изменения названия списка счета
// const editBalanceName = ({ newSourceBalanceName, balanceName }, arr) => {
//   const renamedSourceBalanceName = arr.find((bn) =>
//     bn.balanceName === balanceName ? (bn.balanceName = newSourceBalanceName) : bn.balanceName,
//   );
//   return renamedSourceBalanceName.balanceName;
// };

// const balanceReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CREATE_SOURCE_BALANCE:
//       return {
//         ...state,
//         sourceBalance: [...state.sourceBalance, action.payload],
//         totalBalance: +action.payload.balance + state.totalBalance,
//       };
//     case EDIT_SOURCE_BALANCE:
//       return {
//         ...state,
//         editBalanceName: editBalanceName(action.payload, [...state.sourceBalance]),
//       };
//     case REMOVE_SOURCE_BALANCE:
//       const newSourceBalance = [...state.sourceBalance];
//       newSourceBalance.splice(action.payload.id);

//       return {
//         ...state,
//         sourceBalance: newSourceBalance,
//         totalBalance: state.totalBalance - action.payload.balance,
//       };
//     case ADD_COST_ITEM: {
//       return {
//         ...state,
//         changeBalanceItem: changeBalanceItem(action.payload, [...state.sourceBalance], '-='),
//         totalBalance: state.totalBalance - action.payload.paidData.price,
//       };
//     }
//     case ADD_INCOME_ITEM: {
//       return {
//         ...state,
//         changeBalanceItem: changeBalanceItem(action.payload, [...state.sourceBalance], '+='),
//         totalBalance: +action.payload.paidData.price + state.totalBalance,
//       };
//     }

//     default:
//       return state;
//   }
// };

// export default balanceReducer;
