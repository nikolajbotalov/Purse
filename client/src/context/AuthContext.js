import { createContext } from 'react';

function fake() {}

export const AuthContext = createContext({
  token: null,
  userId: null,
  login: fake,
  logout: fake,
  isAuthenticated: false,
});
