import React from 'react';
import { useDispatch } from 'react-redux';

import { newCostItem, newIncomeItem } from '../redux/actions/newBalanceItem';
import { BalanceBlock, Header, BalanceInput } from '../components';

const ChangeBalancePage = ({ location }) => {
  const dispatch = useDispatch();
  const { balance, balanceName, link } = location.state;
  const [paidData, setPaidData] = React.useState(null);

  const getChangeData = (e) => {
    const data = {
      [e.target.name]: e.target.value,
    };

    setPaidData((prevState) => {
      return { ...prevState, ...data };
    });
  };

  const savePaidItem = () => {
    link === 'cost'
      ? dispatch(newCostItem({ paidData, balanceName, link }))
      : dispatch(newIncomeItem({ paidData, balanceName, link }));
  };

  return (
    <div>
      <Header backBtnText="отмена" saveBtnText="сохранить" prevPage="/" saveHandle={savePaidItem} />
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
