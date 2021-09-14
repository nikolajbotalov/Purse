import React from 'react';
import { useHistory } from 'react-router';

import Button from './Button';

const Header = ({ backBtnText, saveBtnText, prevPage, saveHandle }) => {
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
      <Button btnText={saveBtnText} onClick={onSaveClick} />
    </div>
  );
};

export default Header;
