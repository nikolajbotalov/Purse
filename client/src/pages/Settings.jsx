import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import { Button, Confirm, Header } from "../components";

const Settings = () => {
  const auth = React.useContext(AuthContext);
  const [showModal, setShowModal] = React.useState(false);

  const showModalHandler = () => {
    console.log(showModal)
    setShowModal(true);
    console.log(showModal)
  };

  const logoutHandler = () => {
    auth.logout();
  };

  return (
    <div>
      <Header backBtnText="назад" />
      <div className="settings-container">
        <Link to="/authpage">
          <Button
            btnText="Выход из приложения"
            classname="remove"
            onClick={showModalHandler}
          />
        </Link>
      </div>
      {showModal ? (
        <Confirm
          btnConfirm={logoutHandler}
          btnCancel={() => setShowModal(false)}
          text="выйти из приложения"
        />
      ) : null}
    </div>
  );
};

export default Settings;
