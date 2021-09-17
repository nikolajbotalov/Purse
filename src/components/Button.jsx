import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ icon, btnText, onClick, classname }) => {
  return (
    <>
      <button onClick={onClick} className={classname}>
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
