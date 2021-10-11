import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { HomeHeader, BalanceBlock, BalanceItem } from '../components';

const Home = () => {
  const { sourceBalance, totalBalance } = useSelector(({ balanceReducer }) => balanceReducer);

  return (
    <div>
      <HomeHeader />
      <BalanceBlock classname="home" balance={totalBalance} />
      {sourceBalance.map((balance, index) => {
        return (
          <Link
            to={{
              pathname: '/balancepage/',
              state: { id: index, balanceName: balance.balanceName },
            }}
            key={index}>
            <BalanceItem name={balance.balanceName} balance={balance.balance} />
          </Link>
        );
      })}
    </div>
  );
};

export default Home;