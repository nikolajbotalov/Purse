import { sourceBalanceAPI, userAPI } from '../../api';

export const getAllSourcesAction = (sources) => ({
  type: 'GET_ALL_SOURCES',
  payload: sources,
});

export const getTotalBalanceAction = (payload) => ({
  type: 'GET_USER_TOTAL_BALANCE',
  payload,
});

export const createSourceAction = (payload) => ({
  type: 'CREATE_SOURCE_BALANCE',
  payload,
});

export const updateUserBalanceAction = (payload) => ({
  type: 'UPDATE_USER_BALANCE',
  payload,
});

export const renameSourceAction = (payload) => ({
  type: 'RENAME_SOURCE_BALANCE',
  payload,
});

export const removeSourceAction = (payload) => ({
  type: 'REMOVE_SOURCE_BALANCE',
  payload,
});

export const getUserSources = (token) => {
  return async (dispatch) => {
    await sourceBalanceAPI
      .getAll(token)
      .then(({ data }) => dispatch(getAllSourcesAction(data)))
      .catch();
  };
};

export const getUserTotalBalance = (token) => {
  return async (dispatch) => {
    await userAPI
      .getTotalBalance(token)
      .then(({ data }) => dispatch(getTotalBalanceAction(data)))
      .catch();
  };
};

export const createSourceOfBalance = ({ balance, balanceName, token }) => {
  return async (dispatch) => {
    await sourceBalanceAPI
      .create(balance, balanceName, token)
      .then(({ data }) => dispatch(createSourceAction(data)))
      .catch();
  };
};

export const updateTotalBalance = ({ balance, changeSign = null, link = null, token }) => {
  return async (dispatch) => {
    await userAPI
      .updateTotalBalance(balance, changeSign, link, token)
      .then(({ data }) => dispatch(updateUserBalanceAction(data)))
      .catch();
  };
};

export const renameSourceOfBalance = ({ _id, balanceName }) => {
  return async (dispatch) => {
    await sourceBalanceAPI
      .rename(_id, balanceName)
      .then(({ data }) => dispatch(renameSourceAction(data)))
      .catch();
  };
};

export const removeSourceOfBalance = (id) => {
  return async (dispatch) => {
    await sourceBalanceAPI
      .removeSourceOfBalance(id)
      .then(({ data }) => dispatch(removeSourceAction(data)))
      .catch();
  };
};
