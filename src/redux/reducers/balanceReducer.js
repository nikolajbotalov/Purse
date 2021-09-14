const ADD_BALANCE_ITEM = 'ADD_BALANCE_ITEM';

const initialState = {
  balanceItem: [],
  totalBalance: 0,
};

const balanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BALANCE_ITEM: {
      // В текущей реализации есть проблемы, что объект
      // в массиве перезаписывает, необходимо поправить
      // Так же, написать логику получения общего баланса

      return {
        ...state,
        balanceItem: [...state.balanceItem, action.payload],
      };
    }
    default:
      return state;
  }
};

export default balanceReducer;
