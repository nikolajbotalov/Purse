import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from './Button';

import removeIcon from '../assets/img/remove.svg';
import addIcon from '../assets/img/add.svg';

const BalanceBlock = ({ id, hideBtns, classname, balance, balanceName }) => {
  // console.log(id);
  return (
    <div className={!classname ? 'balance-block' : `balance-block ${classname}`}>
      {!hideBtns ? null : (
        <Link
          to={{
            pathname: '/changebalancepage/cost',
            state: { balance, balanceName, link: 'cost', id },
          }}>
          <Button icon={removeIcon} classname="cost" />
        </Link>
      )}
      <span>{balance}</span>
      {!hideBtns ? null : (
        <Link
          to={{
            pathname: '/changebalancepage/income',
            state: { balance, balanceName, link: 'income' },
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
