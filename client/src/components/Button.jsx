import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ icon, btnText, onClick, classname, disabled = false }) => {
  return (
    <>
      <button onClick={onClick} className={classname} disabled={disabled}>
        {icon && <img src={icon} alt="btn icon" />}
        {btnText && <span>{btnText}</span>}
      </button>
    </>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  btnText: PropTypes.string,
};

Button.defaultProps = {
  icon: null,
  btnText: '',
};

export default Button;
