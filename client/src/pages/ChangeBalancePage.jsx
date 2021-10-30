import React from 'react';
import { useHistory } from 'react-router-dom';

import { balanceItemsAPI, sourceBalanceAPI, userAPI } from '../api';
import { AuthContext } from '../context/AuthContext';
import { BalanceBlock, BalanceInput, Error, Header } from '../components';

const ChangeBalancePage = ({ location }) => {
  const history = useHistory();
  const { token } = React.useContext(AuthContext);
  const { balance, link, id } = location.state;
  const [messageError, setMessageError] = React.useState('');
  const [paidData, setPaidData] = React.useState({
    paidItemName: '',
    price: '',
  });

  const getChangeData = (e) => {
    setMessageError('');
    setPaidData({ ...paidData, [e.target.name]: e.target.value });
  };

  const changeBalanceItem = async () => {
    const { paidItemName, price } = paidData;
    await balanceItemsAPI
      .create({ id, link, paidItemName, price, token: { Authorization: `Bearer ${token}` } })
      .catch(({ message }) => setMessageError(message));
  };

  const updateUserTotalBalance = async () => {
    await userAPI
      .updateTotalBalance({
        balance: paidData.price,
        link,
        token: { Authorization: `Bearer ${token}` },
      })
      .catch();
  };

  const updateBalanceItem = async () => {
    await sourceBalanceAPI.updateBalanceItem({ id, link, price: paidData.price }).catch();
  };

  const changeUserData = async () => {
    await updateBalanceItem();
    await changeBalanceItem();
    await updateUserTotalBalance();
    history.push('/');
  };

  return (
    <div>
      <Header
        backBtnText="отмена"
        saveBtnText="сохранить"
        prevPage="/"
        saveHandle={changeUserData}
      />
      <BalanceBlock classname={link} balance={balance} />
      <div className="description">
        <BalanceInput
          name="paidItemName"
          placeholder={`Введите описание ${link === 'cost' ? 'расхода' : 'дохода'}`}
          onChange={getChangeData}
        />
        <BalanceInput name="price" placeholder="Введите сумму" onChange={getChangeData} />
        <Error errorText={messageError} />
      </div>
    </div>
  );
};

export default ChangeBalancePage;
