import React from 'react';

import { authAPI } from '../api';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';
import { BalanceInput, Button, Error, Header } from '../components';

const AuthPage = () => {
  const auth = React.useContext(AuthContext);
  const { loading, error } = useHttp();
  const [errorMessage, setErrorMessage] = React.useState('');
  const [authData, setAuthData] = React.useState({
    email: '',
    password: '',
  });

  React.useEffect(() => {}, [error]);

  const changeAuthDataHandler = (e) => {
    setErrorMessage('');
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const registerHandler = async () => {
    await authAPI.signUp({ ...authData }).catch(({ message }) => setErrorMessage(message));
  };

  const loginHandler = async () => {
    await authAPI
      .signIn({ ...authData })
      .then(({ data }) => auth.login(data.token, data.userId))
      .catch(({ message }) => setErrorMessage(message));
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
