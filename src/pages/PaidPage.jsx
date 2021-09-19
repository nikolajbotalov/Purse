import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { newCostItem } from '../redux/actions/newBalanceItem';
import { BalanceBlock, Header } from '../components';

const PaidPage = (props) => {
  const dispatch = useDispatch();
  const balance = useSelector(({ balanceReducer }) => balanceReducer);
  console.log(balance);
  const paidName = props.location.pathname.substring(10);
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
      <BalanceBlock classname={paidName} />
      <div className="description">
        <input
          type="text"
          name="paidItemName"
          placeholder="Введите описания расхода"
          onChange={getChangeData}
        />
        <input type="text" name="price" placeholder="Введите сумму" onChange={getChangeData} />
      </div>
    </div>
  );
};

export default PaidPage;
