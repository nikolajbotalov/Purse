export const newBalanceItem = (balanceItem) => ({
  type: 'CREATE_BALANCE_ITEM',
  payload: balanceItem,
});

export const newCostItem = (costItem) => ({
  type: 'ADD_COST_ITEM',
  payload: costItem,
});

export const newIncomeItem = (incomeItem) => ({
  type: 'ADD_INCOME_ITEM',
  payload: incomeItem,
});
