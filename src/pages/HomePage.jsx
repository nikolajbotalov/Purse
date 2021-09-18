import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { HomeHeader, BalanceBlock, BalanceItem } from '../components';

const Home = () => {
  const { balanceItem, totalBalance } = useSelector(({ balanceReducer }) => balanceReducer);

  return (
    <div>
      <HomeHeader />
      <BalanceBlock classname="home" balance={totalBalance} />
      {balanceItem.map((balance, index) => {
        return (
          <NavLink to={'/balancepage/' + balance.balanceName} key={index}>
            <BalanceItem name={balance.balanceName} balance={balance.balance} />
          </NavLink>
        );
      })}
    </div>
  );
};

export default Home;
