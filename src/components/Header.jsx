import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

import Button from './Button';

const Header = ({ backBtnText, saveBtnText, prevPage, saveHandle, balanceName }) => {
  const history = useHistory();

  const onCancelClick = () => {
    history.push(`${prevPage}`);
  };

  const onSaveClick = () => {
    history.push('/');
    saveHandle();
  };

  return (
    <div className="header">
      <Button btnText={backBtnText} onClick={onCancelClick} />
      <span>{balanceName}</span>
      <Button btnText={saveBtnText} onClick={onSaveClick} />
    </div>
  );
};

Header.propTypes = {
  backBtnText: PropTypes.string,
  saveBtnText: PropTypes.string,
  prevPage: PropTypes.string,
  saveHandle: PropTypes.func,
};

export default Header;
