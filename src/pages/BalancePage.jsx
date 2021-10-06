import React from 'react';
import { useSelector } from 'react-redux';

import { Header, BalanceBlock, BalanceItem } from '../components';

const BalancePage = ({ location }) => {
  const balanceData = useSelector(({ balanceReducer }) => balanceReducer.balanceItem);
  const balanceName = location.state.balanceName;

  const getBalanceInfo = (balance) => {
    const balanceInfo = balance.find((bn) => (bn.balanceName === balanceName ? bn.balance : null));
    return balanceInfo;
  };

  const { costs, balance } = getBalanceInfo(balanceData);

  console.log(costs);

  return (
    <div>
      <Header backBtnText="назад" prevPage="/" balanceName={balanceName} />
      <BalanceBlock hideBtns={true} balance={balance} balanceName={balanceName} />
      {costs &&
        costs.map((item, index) => {
          return (
            <BalanceItem
              key={index}
              name={item.paidItemName}
              balance={item.price}
              type={item.paidType}
            />
          );
        })}
    </div>
  );
};

export default BalancePage;
