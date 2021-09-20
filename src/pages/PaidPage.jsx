import React from 'react';
import { useDispatch } from 'react-redux';

import { newCostItem } from '../redux/actions/newBalanceItem';
import { BalanceBlock, Header } from '../components';

const PaidPage = (props) => {
  const dispatch = useDispatch();
  const paidName = props.location.pathname.substring(10);
  const balance = props.location.state.balance;
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
    dispatch(newCostItem(paidData));
  };

  return (
    <div>
      <Header backBtnText="отмена" saveBtnText="сохранить" prevPage="/" saveHandle={savePaidItem} />
      <BalanceBlock classname={paidName} balance={balance} />
      <div className="description">
        <input
          type="text"
          name="paidItemName"
          placeholder={`Введите описание ${paidName === 'cost' ? 'расхода' : 'дохода'}`}
          onChange={getChangeData}
        />
        <input type="text" name="price" placeholder="Введите сумму" onChange={getChangeData} />
      </div>
    </div>
  );
};

export default PaidPage;
