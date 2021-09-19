import React from 'react';
import { useSelector } from 'react-redux';

import { Header, BalanceBlock, BalanceItem } from '../components';

const BalancePage = (props) => {
  const balanceData = useSelector(({ balanceReducer }) => balanceReducer.balanceItem);
  const balanceDetails = useSelector(({ balanceReducer }) => balanceReducer.costs);
  const balanceName = props.location.pathname.substring(13);

  const getBalance = (balance) => {
    const bName = balance.find((bn) => (bn.balanceName === balanceName ? bn.balance : null));
    return bName.balance;
  };

  return (
    <div>
      <Header backBtnText="назад" prevPage="/" />
      <BalanceBlock hideBtns={true} balance={getBalance(balanceData)} />
      {balanceDetails.map((item, index) => {
        return <BalanceItem key={index} name={item.paidItemName} balance={item.price} />;
      })}
    </div>
  );
};

export default BalancePage;
