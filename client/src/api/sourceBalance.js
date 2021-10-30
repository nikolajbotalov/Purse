import { instance } from './instance';

const sourceBalanceAPI = {
  getAll(token) {
    return instance.get('sourcebalance/getsourceofbalance', { headers: token });
  },
  create({ balanceName, balance, token }) {
    return instance.post('sourcebalance/create', { balanceName, balance }, { headers: token });
  },
  rename({ _id, balanceName }) {
    return instance.patch('sourcebalance/renamesourceofbalance', { _id, balanceName });
  },
  updateBalanceItem({ id, link, price }) {
    return instance.patch('sourcebalance/updateitembalance', { id, link, price });
  },
  removeSourceOfBalance(id) {
    return instance.delete('sourcebalance/removesourceofbalance', { data: { id } });
  },
};

export default sourceBalanceAPI;
