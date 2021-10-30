import { instance } from './instance';

const balanceItemsAPI = {
  create({ id, link, paidItemName, price, token }) {
    return instance.post(
      'balanceitem/create',
      { id, link, paidItemName, price, token },
      { headers: token },
    );
  },
  getBalancetems(id) {
    return instance.post('balanceitem/getbalanceitems', { id });
  },
};

export default balanceItemsAPI;
