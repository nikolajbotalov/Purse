import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  removeSourceOfBalance,
  renameSourceOfBalance,
  updateTotalBalance,
} from '../redux/actions/sources';
import { AuthContext } from '../context/AuthContext';
import { BalanceInput, Button, Description, Error, Header } from '../components';

const EditSourceBalancePage = ({ location }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id, balance, balanceName } = location.state;
  const { token } = React.useContext(AuthContext);
  const [messageError, setMessageError] = React.useState('');
  const [newSourceBalanceName, setNewSourceBalanceName] = React.useState({
    balanceName: '',
  });

  const getNewSourceBalanceName = (e) => {
    setMessageError('');
    setNewSourceBalanceName({ ...newSourceBalanceName, [e.target.name]: e.target.value });
  };

  const renameSourceBalanceHandler = async () => {
    const { balanceName } = newSourceBalanceName;
    await dispatch(renameSourceOfBalance({ _id: id, balanceName }));
    history.push('/');
  };

  const removeHandler = async () => {
    await dispatch(
      updateTotalBalance({
        balance,
        changeSign: 'reduce',
        token: { Authorization: `Bearer ${token}` },
      }),
    );
    await dispatch(removeSourceOfBalance({ id }));
    history.push('/');
  };

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
        <Button btnText="удалить список" onClick={removeHandler} classname="remove" />
      </div>
    </div>
  );
};

export default EditSourceBalancePage;
