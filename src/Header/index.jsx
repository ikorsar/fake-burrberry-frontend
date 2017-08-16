import React from 'react';
import styled from 'styled-components';
import hamburger from './hamburger.svg';
import logo from './logo.svg';

const Header = styled.header`
  display: flex;
  padding: 1.125rem .5rem;
  align-items: center;
  position: relative;

  @media screen and (min-width: 48rem) {
    padding: 1.5rem;
  }

  @media screen and (min-width: 64rem) {
    padding: 2rem;
  }
`;

const ButtonMenu = styled.a`display: flex;`;

const Hamburger = styled.img`
  width: 16px;
  height: 11px;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Logo = styled.img`
  width: 166px;
  height: 12px;

  @media screen and (min-width: 64rem) {
    width: 221px;
    height: 16px;
  }
`;

export default () =>
  (<Header>
    <ButtonMenu href="#">
      <Hamburger src={hamburger} />
    </ButtonMenu>
    <Link href="/">
      <Logo src={logo} alt="Burberry Logo" />
    </Link>
  </Header>);
