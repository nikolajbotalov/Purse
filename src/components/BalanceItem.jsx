import React from 'react';
import PropTypes from 'prop-types';

const BalanceItem = ({ name, balance, type }) => {
  // console.log(type);
  return (
    <div className="balance-item">
      <p className="balance-item__title">{name}</p>
      <p className={`balance-item__balance ${type}`}>{balance}</p>
    </div>
  );
};

BalanceItem.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
};

export default BalanceItem;
