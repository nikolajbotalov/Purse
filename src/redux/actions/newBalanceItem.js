export const newBalanceItem = (balanceItem) => ({
  type: 'ADD_BALANCE_ITEM',
  payload: balanceItem,
});

export const newCostItem = (costItem) => ({
  type: 'ADD_COST_ITEM',
  payload: costItem,
});
