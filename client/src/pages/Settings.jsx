import React from "react";
import { useHistory } from "react-router";

import { AuthContext } from "../context/AuthContext";
import { Button, Confirm, Header } from "../components";

const Settings = () => {
  const history = useHistory()
  const auth = React.useContext(AuthContext);
  const [showModal, setShowModal] = React.useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  }

  const logoutHandler = () => {
    auth.logout();
    history.push('/authpage');
  };

  return (
    <div>
      <Header backBtnText="назад" />
      <div className="settings-container">
          <Button
            btnText="Выход из приложения"
            classname="remove"
            onClick={showModalHandler}
          />
      </div>
      {showModal ? (
        <Confirm btnConfirm={logoutHandler} text="выйти из приложения" />
      ) : null}
    </div>
  );
};

export default Settings;
