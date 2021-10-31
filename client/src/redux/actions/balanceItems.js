import { balanceItemsAPI } from '../../api';

export const getAllItems = (items) => ({
  type: 'GET_ITEMS',
  payload: items,
});

export const getSourceItems = (id) => {
  return async (dispatch) => {
    await balanceItemsAPI
      .getBalancetems(id)
      .then(({ data }) => dispatch(getAllItems(data)))
      .catch(e);
  };
};
