import React from 'react';
import { useDispatch } from 'react-redux';

import { newBalanceItem } from '../redux/actions/newBalanceItem';
import { Header } from '../components';

const NewBalance = () => {
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
    dispatch(newBalanceItem(balanceData));
  };

  return (
    <div>
      <Header
        backBtnText="отмена"
        saveBtnText="сохранить"
        prevPage="/"
        saveHandle={saveBalanceItem}
      />
      <input
        className="balance-input"
        placeholder="Имя списка"
        name="balanceName"
        onChange={getBalanceData}
      />
      <span className="balance-input__description">
        Укажите название списка для счета (Наличные, карта)
      </span>
      <input
        className="balance-input"
        placeholder="Имя списка"
        name="balance"
        onChange={getBalanceData}
      />
      <span className="balance-input__description">Укажите начальный баланс счета (Бюджет)</span>
    </div>
  );
};

export default NewBalance;
