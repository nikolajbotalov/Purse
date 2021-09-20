import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from './Button';

import removeIcon from '../assets/img/remove.svg';
import addIcon from '../assets/img/add.svg';

const BalanceBlock = ({ hideBtns, classname, balance }) => {
  return (
    <div className={!classname ? 'balance-block' : `balance-block ${classname}`}>
      {!hideBtns ? null : (
        <Link
          to={{
            pathname: '/paidpage/cost',
            state: { balance },
          }}>
          <Button icon={removeIcon} classname="remove" />
        </Link>
      )}
      <span>{balance}</span>
      {!hideBtns ? null : (
        <Link
          to={{
            pathname: '/paidpage/income',
            state: { balance },
          }}>
          <Button icon={addIcon} classname="add" />
        </Link>
      )}
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
