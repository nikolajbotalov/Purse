import React from 'react';
import { useSelector } from 'react-redux';

import { HomeHeader, BalanceBlock, BalanceItem } from '../components';

const Home = () => {
  const balanceData = useSelector(({ balanceReducer }) => balanceReducer.balanceItem);

  return (
    <div>
      <HomeHeader />
      <BalanceBlock />
      {balanceData.map((balance, index) => {
        return <BalanceItem key={index} name={balance.balanceName} balance={balance.balance} />;
      })}
    </div>
  );
};

export default Home;
