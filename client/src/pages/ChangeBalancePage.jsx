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
  const [paidData, setPaidData] = React.useState({
    paidItemName: '',
    price: '',
  });
  const [messageError, setMessageError] = React.useState('');

  const getChangeData = (e) => {
    setMessageError('');
    setPaidData({ ...paidData, [e.target.name]: e.target.value });
  };

  const fetchChangeBalanceItem = async () => {
    try {
      const { paidItemName, price } = paidData;

      await request(
        '/api/balanceitem/create',
        'POST',
        { paidItemName, price, id },
        { Authorization: `Bearer ${token}` },
      );

      history.push('/');
    } catch ({ message }) {
      setMessageError(message);
    }
  };

  return (
    <div>
      <Header
        backBtnText="отмена"
        saveBtnText="сохранить"
        prevPage="/"
        saveHandle={fetchChangeBalanceItem}
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
