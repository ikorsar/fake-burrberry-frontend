import React from 'react';
import Responsive from 'react-responsive';

export const SmallOnly = ({ children }) =>
  (<Responsive maxWidth={991}>
    {children}
  </Responsive>);

export const LargeOnly = ({ children }) =>
  (<Responsive minWidth={992}>
    {children}
  </Responsive>);
