import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import Buttons from './Buttons';

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

const HelpLink = styled.a`
  font-family: "Lora", Helvetica, Arial, serif;
  font-size: .875rem;
  font-style: italic;
  line-height: 1rem;
  display: block;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  color: #171717;

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

    <Help>Need help?</Help>

    <HelpLink href="#" title="Find out more and contact us">
      Find out more and contact us
    </HelpLink>
  </Footer>);
