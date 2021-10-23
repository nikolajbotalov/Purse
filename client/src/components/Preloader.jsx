import React from 'react';

import preloaderImg from '../assets/img/preloader/preloader.gif';

const Preloader = () => {
  return (
    <div className="preloader-wrapper">
      <img src={preloaderImg} alt="preloader" />
    </div>
  );
};

export default Preloader;
