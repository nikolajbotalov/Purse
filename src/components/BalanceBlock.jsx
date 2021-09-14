import React from 'react';
import { useSelector } from 'react-redux';

const BalanceBlock = () => {
  const totalBalance = useSelector(({ balanceReducer }) => balanceReducer.totalBalance);

  return (
    <div className="balance-block">
      <span>{totalBalance}</span>
    </div>
  );
};

export default BalanceBlock;
