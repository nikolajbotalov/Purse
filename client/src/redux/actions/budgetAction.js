export const createItemBalance = (items) => ({
  type: 'ADD_BALANCE_ITEM',
  payload: items,
});

export const someErrorMessage = (message) => ({
  type: 'GET_ERROR',
  payload: message,
})
