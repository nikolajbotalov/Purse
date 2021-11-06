import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  removeSourceOfBalance,
  renameSourceOfBalance,
  updateTotalBalance,
} from "../redux/actions/sources";
import { removeAllItems } from "../redux/actions/balanceItems";
import { AuthContext } from "../context/AuthContext";
import {
  BalanceInput,
  Button,
  Confirm,
  Description,
  Error,
  Header,
} from "../components";

const EditSourceBalancePage = ({ location }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const error = useSelector(({ budgetReducer }) => budgetReducer.errorText);
  const { id, balance, balanceName } = location.state;
  const { token } = React.useContext(AuthContext);
  const [messageError, setMessageError] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);
  const [newSourceBalanceName, setNewSourceBalanceName] = React.useState({
    balanceName: "",
  });

  const getNewSourceBalanceName = (e) => {
    setMessageError("");
    setNewSourceBalanceName({
      ...newSourceBalanceName,
      [e.target.name]: e.target.value,
    });
  };

  const showConfirmModalHandler = () => {
    setShowModal(true);
  };

  const renameSourceBalanceHandler = () => {
    const { balanceName } = newSourceBalanceName;
    dispatch(renameSourceOfBalance({ _id: id, balanceName }));

    setShowModal(false);
    if (balanceName !== "") {
      history.push("/");
    } else {
      return null;
    }
  };

  const removeHandler = async () => {
    await dispatch(removeAllItems({ id }));
    await dispatch(
      updateTotalBalance({
        balance,
        changeSign: "reduce",
        token: { Authorization: `Bearer ${token}` },
      })
    );
    await dispatch(removeSourceOfBalance({ id }));
    history.push("/");
  };

  React.useEffect(() => {
    setMessageError(error);
  }, [error]);

  return (
    <div>
      <Header
        backBtnText="назад"
        saveBtnText="сохранить"
        prevPage="/"
        saveHandle={renameSourceBalanceHandler}
      />
      <BalanceInput
        placeholder={balanceName}
        name="balanceName"
        classname="balance-input"
        onChange={getNewSourceBalanceName}
      />
      <Description
        text="Измените название списка для счета"
        classname="balance-input__description"
      />
      <Error errorText={messageError} />
      <div className="list-controller">
        <Button
          btnText="удалить список"
          onClick={showConfirmModalHandler}
          classname="remove"
        />
      </div>
      {showModal ? (
        <Confirm
          btnConfirm={removeHandler}
          btnCancel={() => setShowModal(false)}
          text="удалить источник баланса"
        />
      ) : null}
    </div>
  );
};

export default EditSourceBalancePage;
