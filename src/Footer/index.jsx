import React from 'react';
import styled from 'styled-components';

import Nav from './Nav/index';
import Buttons from './Buttons';
import HelpLink from './HelpLink';

const Footer = styled.footer`
  padding: 2rem 0;
  background-color: #f3f3f3;

  @media screen and (min-width: 62rem) {
    padding: 4rem 0;
  }
`;

const Help = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.25rem;
  margin: 1.5rem 0 1rem;
  text-align: center;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

export default () =>
  (<Footer>
    <div className="container">
      <Nav />
      <Buttons />
    </div>

    <Help>Need Help?</Help>

    <HelpLink href="#">Find out more and contact us</HelpLink>
  </Footer>);