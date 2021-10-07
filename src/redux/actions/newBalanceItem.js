export const newBalanceItem = (balanceItem) => ({
  type: 'CREATE_BALANCE_ITEM',
  payload: balanceItem,
});

export const editBalanceItem = (balanceName) => ({
  type: 'EDIT_BALANCE_ITEM',
  payload: balanceName,
});

export const deleteBalanceItem = (balanceName) => ({
  type: 'REMOVE_BALANCE_ITEM',
  payload: balanceName,
});

export const newCostItem = (costItem) => ({
  type: 'ADD_COST_ITEM',
  payload: costItem,
});

export const newIncomeItem = (incomeItem) => ({
  type: 'ADD_INCOME_ITEM',
  payload: incomeItem,
});
