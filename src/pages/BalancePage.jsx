import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Header, BalanceBlock, BalanceItem } from '../components';

const BalancePage = (props) => {
  const balanceData = useSelector(({ balanceReducer }) => balanceReducer.balanceItem);
  const balanceDetails = useSelector(({ balanceReducer }) => balanceReducer.costs);
  const balanceName = props.history.location.pathname.substring(13);

  const getBalance = (balance) => {
    const bName = balance.find((bn) => (bn.balanceName === balanceName ? bn.balance : null));
    return bName.balance;
  };

  return (
    <div>
      <Header backBtnText="назад" prevPage="/" />
      <BalanceBlock hideBtns={true} balance={getBalance(balanceData)} />
      {balanceDetails.map((item, index) => {
        return (
          <Link to="/paidpage" key={index}>
            <BalanceItem name={item.paidItemName} balance={item.price} />
          </Link>
        );
      })}
    </div>
  );
};

export default BalancePage;
