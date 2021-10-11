import React from 'react';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';

import { BalanceInput, Button, Header } from '../components';

// TODO: Не срабатывает метод login

const AuthPage = () => {
  const auth = React.useContext(AuthContext);
  console.log(auth);
  const { loading, error, request } = useHttp();
  const [authData, setAuthData] = React.useState({
    email: '',
    password: '',
  });

  React.useEffect(() => {}, [error]);

  const changeAuthDataHandler = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...authData });
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login');
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

  return (
    <div>
      <Header />
      <div className="auth-container">
        <BalanceInput placeholder="Email" name="email" onChange={changeAuthDataHandler} />
        <BalanceInput
          type="password"
          placeholder="Пароль"
          name="password"
          onChange={changeAuthDataHandler}
        />
        <div className="auth-container__buttons">
          <Button btnText="Войти" classname="signin" onClick={loginHandler} disabled={loading} />
          <Button btnText="Регистрация" onClick={registerHandler} disabled={loading} />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
