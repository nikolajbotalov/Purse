import React from 'react';
import { useSelector } from 'react-redux';

import { Header, BalanceBlock } from '../components';

const BalancePage = ({ balanceName }) => {
  const balanceData = useSelector(({ balanceReducer }) => balanceReducer);

  console.log(balanceName);

  return (
    <div>
      <Header backBtnText="назад" prevPage="/" />
      <BalanceBlock hideBtns={true} balance={balanceData.balanceItem.balance} />
    </div>
  );
};

export default BalancePage;
