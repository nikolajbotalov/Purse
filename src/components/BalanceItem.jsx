import React from 'react';
import PropTypes from 'prop-types';

const BalanceItem = ({ name, balance }) => {
  return (
    <div className="balance-item">
      <p className="balance-item__title">{name}</p>
      <p className="balance-item__balance">{balance}</p>
    </div>
  );
};

BalanceItem.propTypes = {
  name: PropTypes.string,
};

export default BalanceItem;
