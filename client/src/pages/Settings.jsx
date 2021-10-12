import React from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import { Button, Header } from '../components';

const Settings = () => {
  const auth = React.useContext(AuthContext);

  const logoutHandler = () => {
    auth.logout();
  };

  return (
    <div>
      <Header backBtnText="назад" />
      <div className="settings-container">
        <Link to="/authpage">
          <Button btnText="Выход из приложения" classname="remove" onClick={logoutHandler} />
        </Link>
      </div>
    </div>
  );
};

export default Settings;
