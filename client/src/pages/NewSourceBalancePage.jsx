import React from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';
import { Header, BalanceInput, Description } from '../components';

const NewSourceBalancePage = () => {
  const { request } = useHttp();
  const { token } = React.useContext(AuthContext);
  const history = useHistory();
  const [balanceData, setBalanceData] = React.useState(null);

  const getBalanceData = (e) => {
    const data = {
      [e.target.name]: e.target.value,
    };

    setBalanceData((prevState) => {
      return { ...prevState, ...data };
    });
  };

  const saveBalanceItem = async () => {
    const { balanceName, balance } = balanceData;
    try {
      await request(
        '/api/sourcebalance/create',
        'POST',
        {
          balanceName,
          balance,
        },
        { Authorization: `Bearer ${token}` },
      );

      // TODO: Подключить библиотеку react-popup и вывести сообщение об ошибке
      history.push('/');
    } catch (e) {}
  };

  return (
    <div>
      <Header
        backBtnText="отмена"
        saveBtnText="сохранить"
        prevPage="/"
        saveHandle={saveBalanceItem}
      />

      <BalanceInput
        classname="balance-input"
        placeholder="Имя списка"
        name="balanceName"
        onChange={getBalanceData}
      />
      <Description
        classname="balance-input__description"
        text="Укажите название списка для счета (Наличные, карта)"
      />
      <BalanceInput
        classname="balance-input"
        placeholder="Сумма"
        name="balance"
        onChange={getBalanceData}
      />
      <Description
        classname="balance-input__description"
        text="Укажите начальный баланс счета (Бюджет)"
      />
    </div>
  );
};

export default NewSourceBalancePage;
