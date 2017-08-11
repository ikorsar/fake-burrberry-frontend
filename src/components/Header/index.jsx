import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

const Header = styled.header`
  padding: 1rem 0;
  border-bottom: 1px solid #c6c6c6;

  @media screen and (min-width: 48rem) {
    padding: 1.5rem;
  }

  @media screen and (min-width: 64rem) {
    padding: 2rem;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 138px;
  height: 10px;

  @media screen and (min-width: 64rem) {
    width: 221px;
    height: 16px;
  }
`;

export default () =>
  (<Header>
    <Link href="/">
      <Logo src={logo} alt="Burberry Logo" />
    </Link>
  </Header>);
