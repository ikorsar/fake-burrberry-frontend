import React from 'react';
import Responsive from 'react-responsive';
import PropTypes from 'prop-types';

export const SmallOnly = ({ children }) =>
  (<Responsive maxWidth={991}>
    {children}
  </Responsive>);

export const LargeOnly = ({ children }) =>
  (<Responsive minWidth={992}>
    {children}
  </Responsive>);

SmallOnly.propTypes = {
  children: PropTypes.node.isRequired,
};

LargeOnly.propTypes = {
  children: PropTypes.node.isRequired,
};
