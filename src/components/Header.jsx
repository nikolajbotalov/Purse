import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

import Button from './Button';
import { Link } from 'react-router-dom';

const Header = ({ backBtnText, saveBtnText, prevPage, saveHandle, balanceName, icon }) => {
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
      {balanceName && (
        <Link
          to={{
            pathname: '/editbalancepage',
            state: { balanceName: balanceName },
          }}>
          <span>{balanceName}</span>
        </Link>
      )}
      <Button btnText={saveBtnText} onClick={onSaveClick} icon={icon} />
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
