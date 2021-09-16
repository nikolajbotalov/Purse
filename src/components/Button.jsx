import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ icon, btnText, onClick }) => {
  return (
    <>
      <button onClick={onClick}>
        {icon && <img src={icon} alt="btn icon" />}
        {btnText && <span>{btnText}</span>}
      </button>
    </>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  btnText: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  icon: null,
  btnText: '',
};

export default Button;
