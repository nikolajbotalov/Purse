import React from 'react';
import { useHistory } from 'react-router-dom';

import { useHttp } from '../hooks/http.hook';
import { BalanceInput, Button, Description, Header } from '../components';

const EditSourceBalancePage = ({ location }) => {
  const history = useHistory();
  const { request } = useHttp();
  const { id, balanceName } = location.state;
  const [newSourceBalanceName, setNewSourceBalanceName] = React.useState({
    balanceName: '',
  });

  const getNewSourceBalanceName = (e) => {
    setNewSourceBalanceName({ ...newSourceBalanceName, [e.target.name]: e.target.value });
  };

  const editSourceBalanceHandler = async () => {
    try {
      const renaming = await request('/api/sourcebalance/renamesourceofbalance', 'PATCH', {
        _id: id,
        balanceName: newSourceBalanceName.balanceName,
      });

      // TODO: подключить библиотеку react-popup и вывести текст сообщения ошибки
    } catch (e) {}
  };

  const removeSourceBalanceHandler = async () => {
    try {
      await request('/api/sourcebalance/removesourceofbalance', 'DELETE', {
        _id: id,
      });
      history.push('/');
    } catch (e) {}
  };

  return (
    <div>
      <Header
        backBtnText="назад"
        saveBtnText="сохранить"
        prevPage="/"
        saveHandle={editSourceBalanceHandler}
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
      <div className="list-controller">
        <Button btnText="удалить список" onClick={removeSourceBalanceHandler} classname="remove" />
      </div>
    </div>
  );
};

export default EditSourceBalancePage;
