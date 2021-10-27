import React from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';
import { BalanceInput, Button, Description, Error, Header } from '../components';

const EditSourceBalancePage = ({ location }) => {
  const history = useHistory();
  const { request } = useHttp();
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
    try {
      await request('/api/sourcebalance/renamesourceofbalance', 'PATCH', {
        _id: id,
        balanceName: newSourceBalanceName.balanceName,
      });
    } catch ({ message }) {
      setMessageError(message);
    }
  };

  const removeSourceBalanceHandler = async () => {
    try {
      await request('/api/sourcebalance/removesourceofbalance', 'DELETE', {
        _id: id,
      });
      history.push('/');
    } catch (e) {}
  };

  const updateUserTotalBalance = async () => {
    try {
      await request(
        '/api/user/updateusertotalbalance',
        'PATCH',
        {
          balance,
          changeSign: 'reduce',
        },
        { Authorization: `Bearer ${token}` },
      );
    } catch (e) {}
  };

  const removeHandler = async () => {
    await updateUserTotalBalance();
    await removeSourceBalanceHandler();
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
