import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ errorText }) => {
  return <span className="error">{errorText}</span>;
};

Error.propTypes = {
  errorText: PropTypes.string,
};

export default Error;
