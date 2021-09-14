import React from 'react';

const Button = ({ icon = null, btnText = '', onClick }) => {
  return (
    <>
      <button onClick={onClick}>
        {icon && <img src={icon} alt="btn icon" />}
        {btnText && <span>{btnText}</span>}
      </button>
    </>
  );
};

export default Button;
