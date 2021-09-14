import React from 'react';

const BalanceItem = ({ name, balance }) => {
  return (
    <div className="balance-item">
      <p className="balance-item__title">{name}</p>
      <p className="balance-item__balance">{balance}</p>
    </div>
  );
};

export default BalanceItem;
