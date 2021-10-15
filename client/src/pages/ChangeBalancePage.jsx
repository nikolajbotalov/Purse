import React from 'react';
// import { useDispatch } from 'react-redux';

import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';
// import { newCostItem, newIncomeItem } from '../redux/actions/BalanceActions';
import { BalanceBlock, Header, BalanceInput } from '../components';

const ChangeBalancePage = ({ location }) => {
  const { token } = React.useContext(AuthContext);
  const { request } = useHttp();
  // const dispatch = useDispatch();
  const { balance, link, id } = location.state;
  const [paidData, setPaidData] = React.useState(null);

  const getChangeData = (e) => {
    const data = {
      [e.target.name]: e.target.value,
    };

    setPaidData((prevState) => {
      return { ...prevState, ...data };
    });
  };

  const fetchChangeBalanceItem = async () => {
    try {
      const { paidItemName, price } = paidData;

      const sendRequest = await request(
        '/api/balanceitem/create',
        'POST',
        { paidItemName, price, id },
        { Authorization: `Bearer ${token}` },
      );

      return () => {};
    } catch (error) {}
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
      </div>
    </div>
  );
};

export default ChangeBalancePage;

// link === 'cost'
// ? dispatch(newCostItem({ paidData, balanceName, link }))
// : dispatch(newIncomeItem({ paidData, balanceName, link }));
