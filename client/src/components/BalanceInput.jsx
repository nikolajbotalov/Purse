import React from 'react';
import PropTypes from 'prop-types';

const BalanceInput = ({ classname, placeholder, name, onChange, type = 'text' }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={classname}
        name={name}
        onChange={onChange}
      />
    </>
  );
};

BalanceInput.propTypes = {
  classname: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onchange: PropTypes.func,
};

export default BalanceInput;
