import React from 'react';
import Responsive from 'react-responsive';

// Desktop, tablet and mobile setup
export const Desktop = ({ children }) => <Responsive minWidth={'62rem'} children={children} />;
export const Tablet = ({ children }) =>
  <Responsive minWidth={'48rem'} maxWidth={'62rem'} children={children} />;
export const Mobile = ({ children }) => <Responsive maxWidth={'48rem'} children={children} />;
