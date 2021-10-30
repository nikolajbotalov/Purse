import React from 'react';
import { useHistory } from 'react-router-dom';

import { sourceBalanceAPI, userAPI } from '../api';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';
import { BalanceInput, Description, Error, Header, Preloader } from '../components';

const NewSourceBalancePage = () => {
  const { loading } = useHttp();
  const { token } = React.useContext(AuthContext);
  const history = useHistory();
  const [messageError, setMessageError] = React.useState('');
  const [balanceData, setBalanceData] = React.useState({
    balanceName: '',
    balance: '',
  });

  const getBalanceData = (e) => {
    setMessageError('');
    setBalanceData({ ...balanceData, [e.target.name]: e.target.value });
  };

  const createSourceBalance = async () => {
    const { balanceName, balance } = balanceData;
    try {
      await sourceBalanceAPI.create({
        balanceName,
        balance,
        token: { Authorization: `Bearer ${token}` },
      });
    } catch ({ message }) {
      setMessageError(message);
    }
  };

  const updateUserTotalBalance = async () => {
    const { balance } = balanceData;
    try {
      await userAPI.updateTotalBalance({
        balance,
        changeSign: 'increase',
        token: { Authorization: `Bearer ${token}` },
      });
    } catch ({ message }) {
      console.log(message);
    }
  };

  const saveBalanceItem = async () => {
    await createSourceBalance();
    await updateUserTotalBalance();

    history.push('/');
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <div>
      {!loading && (
        <Header
          backBtnText="отмена"
          saveBtnText="сохранить"
          prevPage="/"
          saveHandle={saveBalanceItem}
        />
      )}

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
      <Error errorText={messageError} />
    </div>
  );
};

export default NewSourceBalancePage;
