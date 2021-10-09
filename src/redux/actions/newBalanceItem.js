export const createSoureBalance = (sourceBalance) => ({
  type: 'CREATE_SOURCE_BALANCE',
  payload: sourceBalance,
});

export const editSourceBalance = (sourceBalance) => ({
  type: 'EDIT_SOURCE_BALANCE',
  payload: sourceBalance,
});

export const removeSourceBalance = (sourceBalance) => ({
  type: 'REMOVE_SOURCE_BALANCE',
  payload: sourceBalance,
});

export const newCostItem = (costItem) => ({
  type: 'ADD_COST_ITEM',
  payload: costItem,
});

export const newIncomeItem = (incomeItem) => ({
  type: 'ADD_INCOME_ITEM',
  payload: incomeItem,
});
