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

  const changeUserBalance = async () => {
    try {
      const userBalance = await request(
        '/api/user/changeuserbalance',
        'PATCH',
        { balance: paidData.price, link: link },
        { Authorization: `Bearer ${token}` },
      );
      console.log(userBalance);
    } catch ({ message }) {
      console.log(message);
    }
  };

  const changeItemBalance = async () => {
    try {
      const itemPrice = await request('/api/sourcebalance/changebalance', 'PATCH', {
        price: paidData.price,
        id: id,
      });
      console.log(itemPrice);
    } catch ({ message }) {
      console.log(message);
    }
  };

  const changeUserData = () => {
    changeBalanceItem();
    changeItemBalance();
    changeUserBalance();
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
