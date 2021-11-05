import { balanceItemsAPI, sourceBalanceAPI } from "../../api";

export const getAllItemsAction = (items) => ({
  type: "GET_SOURCE_ITEMS",
  payload: items,
});

export const createBalanceItemAction = (payload) => ({
  type: "CREATE_ITEM_BALANCE",
  payload,
});

export const updateItemBalanceAction = (payload) => ({
  type: "UPDATE_ITEM_BALANCE",
  payload,
});

export const getSourceItems = (id) => {
  return async (dispatch) => {
    await balanceItemsAPI
      .getBalancetems(id)
      .then(({ data }) => dispatch(getAllItemsAction(data)))
      .catch();
  };
};

export const createSourceItem = ({ id, itemName, price, token, link }) => {
  return async (dispatch) => {
    await balanceItemsAPI
      .create(id, itemName, price, token, link)
      .then(({ data }) => dispatch(createBalanceItemAction(data)))
      .catch();
  };
};

export const updateItemBalance = ({ id, link, price }) => {
  return async (dispatch) => {
    await sourceBalanceAPI
      .updateBalanceItem(id, link, price)
      .then(({ data }) => dispatch(updateItemBalanceAction(data)))
      .catch();
  };
};
