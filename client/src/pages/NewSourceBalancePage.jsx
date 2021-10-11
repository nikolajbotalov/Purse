import React from 'react';
import { useDispatch } from 'react-redux';

import { createSoureBalance } from '../redux/actions/BalanceActions';
import { Header, BalanceInput, Description } from '../components';

const NewSourceBalancePage = () => {
  const dispatch = useDispatch();
  const [balanceData, setBalanceData] = React.useState(null);

  const getBalanceData = (e) => {
    const data = {
      [e.target.name]: e.target.value,
    };

    setBalanceData((prevState) => {
      return { ...prevState, ...data };
    });
  };

  const saveBalanceItem = () => {
    dispatch(createSoureBalance(balanceData));
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
