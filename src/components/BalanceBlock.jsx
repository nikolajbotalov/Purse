import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

import removeIcon from '../assets/img/remove.svg';
import addIcon from '../assets/img/add.svg';

const BalanceBlock = ({ hideBtns, classname, balance }) => {
  return (
    <div className={!classname ? 'balance-block' : `balance-block ${classname}`}>
      {!hideBtns ? null : <Button icon={removeIcon} classname="remove" />}
      <span>{balance}</span>
      {!hideBtns ? null : <Button icon={addIcon} classname="add" />}
    </div>
  );
};

BalanceBlock.propTypes = {
  hideBtns: PropTypes.bool,
  classname: PropTypes.string,
};

BalanceBlock.defaultTypes = {
  hideBtns: false,
  classname: '',
};

export default BalanceBlock;
