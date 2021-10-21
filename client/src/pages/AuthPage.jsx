import React from 'react';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';

import { BalanceInput, Button, Error, Header } from '../components';

const AuthPage = () => {
  const auth = React.useContext(AuthContext);
  const { loading, error, request } = useHttp();
  const [authData, setAuthData] = React.useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = React.useState('');

  React.useEffect(() => {}, [error]);

  const changeAuthDataHandler = (e) => {
    setErrorMessage('');
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const registerHandler = async () => {
    try {
      await request('/api/auth/register', 'POST', { ...authData });
    } catch ({ message }) {
      setErrorMessage(message);
    }
  };

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...authData });
      auth.login(data.token, data.userId);
    } catch ({ message }) {
      setErrorMessage(message);
    }
  };

  return (
    <div>
      <Header />
      <div className="auth-container">
        <BalanceInput
          type="email"
          placeholder="Email"
          name="email"
          onChange={changeAuthDataHandler}
        />
        <BalanceInput
          type="password"
          placeholder="Пароль"
          name="password"
          onChange={changeAuthDataHandler}
        />
        <Error errorText={errorMessage} />
        <div className="auth-container__buttons">
          <Button btnText="Войти" classname="signin" onClick={loginHandler} disabled={loading} />
          <Button btnText="Регистрация" onClick={registerHandler} disabled={loading} />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
