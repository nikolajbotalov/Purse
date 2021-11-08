import { instance } from "./instance";

const balanceItemsAPI = {
  create(id, itemName, price, token, link) {
    return instance.post(
      "balanceitem/create",
      { id, itemName, price, link },
      { headers: token }
    );
  },
  getBalancetems(id) {
    return instance.post("balanceitem/getbalanceitems", { id });
  },
  editItem(_id, itemName, price) {
    return instance.post("balanceitem/edititem", { _id, itemName, price });
  },
  removeItem(id) {
    return instance.delete("balanceitem/removeitem", { data: { id } });
  },
  removeAll(id) {
    return instance.delete("balanceitem/removeallitems", { data: { id } });
  },
};

export default balanceItemsAPI;
