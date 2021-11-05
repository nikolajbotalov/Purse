import { instance } from './instance';

const balanceItemsAPI = {
  create(id, itemName, price, token, link) {
   
    return instance.post(
      'balanceitem/create',
      { id, itemName, price, link },
      { headers: token },
    );
  },
  getBalancetems(id) {
    return instance.post('balanceitem/getbalanceitems', { id });
  },
};

export default balanceItemsAPI;
