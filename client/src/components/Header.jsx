import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

import Button from './Button';
import { Link } from 'react-router-dom';

const Header = ({
  id,
  backBtnText,
  saveBtnText,
  prevPage,
  saveHandle,
  balanceName,
  icon,
  balance = 'null',
}) => {
  const history = useHistory();

  const onCancelClick = () => {
    history.push(`${prevPage}`);
  };

  const onSaveClick = () => {
    saveHandle();
  };

  return (
    <div className="header">
      <Button btnText={backBtnText} onClick={onCancelClick} />
      {balanceName && (
        <Link
          to={{
            pathname: '/editsourcebalancepage',
            state: { id, balanceName, balance },
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
