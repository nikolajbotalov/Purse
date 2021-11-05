import { instance } from './instance';

const authAPI = {
  signIn(email, password) {
    return instance.post('auth/login', { email, password });
  },
  signUp(email, password) {
    return instance.post('auth/register', { email, password });
  },
};

export default authAPI;
