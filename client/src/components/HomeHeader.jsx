import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../components';

import addListIcon from '../assets/img/add-list.svg';
import settingsIcon from '../assets/img/settings.svg';

const HomeHeader = () => {
  return (
    <div className="home-header">
      <Link to="/newsourcebalancepage">
        <Button icon={addListIcon} />
      </Link>

      <Link to="/settings">
        <Button icon={settingsIcon} />
      </Link>
    </div>
  );
};

export default HomeHeader;
