import { instance } from './instance';

const userAPI = {
  getTotalBalance(token) {
    return instance.get('user/getuserbalance', { headers: token });
  },
  updateTotalBalance({ balance, changeSign, link, token }) {
    return instance.patch(
      'user/updateusertotalbalance',
      { balance, changeSign, link },
      { headers: token },
    );
  },
};

export default userAPI;
