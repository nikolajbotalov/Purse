import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ classname, text }) => {
  return (
    <>
      <span className={classname}>{text}</span>
    </>
  );
};

Description.propTypes = {
  classname: PropTypes.string,
  text: PropTypes.string,
};
export default Description;
