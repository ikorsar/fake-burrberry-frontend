import React from 'react';
import Responsive from 'react-responsive';

// Desktop, tablet and mobile setup
export const Desktop = ({ children }) => <Responsive minWidth={'62rem'} children={children} />;
export const DesktopLess = ({ children }) => <Responsive maxWidth={'62rem'} children={children} />;

export const TabletAndMore = ({ children }) =>
  <Responsive minWidth={'48rem'} children={children} />;
export const Tablet = ({ children }) =>
  <Responsive minWidth={'48rem'} maxWidth={'62rem'} children={children} />;

export const Mobile = ({ children }) => <Responsive maxWidth={767} children={children} />;
