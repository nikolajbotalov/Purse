import React from 'react';
import { useHistory } from 'react-router-dom';

import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';
import { BalanceBlock, BalanceInput, Error, Header } from '../components';

const ChangeBalancePage = ({ location }) => {
  const history = useHistory();
  const { token } = React.useContext(AuthContext);
  const { request } = useHttp();
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
    try {
      const { paidItemName, price } = paidData;

      await request(
        '/api/balanceitem/create',
        'POST',
        { paidItemName, price, id },
        { Authorization: `Bearer ${token}` },
      );
    } catch ({ message }) {
      setMessageError(message);
    }
  };

  const updateUserTotalBalance = async () => {
    try {
      await request(
        '/api/user/updateusertotalbalance',
        'PATCH',
        { balance: paidData.price, link: link },
        { Authorization: `Bearer ${token}` },
      );
    } catch ({ message }) {
      console.log(message);
    }
  };

  const updateItemBalance = async () => {
    try {
      await request('/api/sourcebalance/updateitembalance', 'PATCH', {
        id: id,
        link: link,
        price: paidData.price,
      });
    } catch ({ message }) {
      console.log(message);
    }
  };

  const changeUserData = async () => {
    await updateItemBalance();
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
