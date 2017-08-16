import React from 'react';
import styled from 'styled-components';
import hamburger from './hamburger.svg';
import logo from './logo.svg';
import arrow from './arrow.svg';

const Header = styled.header`
  display: flex;
  padding: 1.125rem .5rem;
  align-items: center;
  position: relative;

  @media screen and (min-width: 48rem) {
    padding: 1.5rem .5rem;
  }

  @media screen and (min-width: 64rem) {
    padding: 2rem;
  }
`;

const ButtonMenu = styled.a`
  display: flex;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

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

  @media screen and (min-width: 48rem) {
    width: 221px;
    height: 16px;
  }
`;

const Country = styled.button`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1.33;
  font-weight: 600;
  text-align: left;
  border: none;
  background-color: transparent;
  padding: 0;
  color: #999;
  display: none;
  position: relative;
  margin-left: .5rem;

  @media screen and (min-width: 48rem) {
    display: flex;
    align-items: center;
  }
`;

const Arrow = styled.img`
  width: 12px;
  height: 6px;
  margin-left: .75rem;
`;

export default () =>
  (<Header>
    <ButtonMenu href="#">
      <Hamburger src={hamburger} />
    </ButtonMenu>
    <Country>
      Shopping in: United Kingdom (£)
      <Arrow src={arrow} />
    </Country>
    <Link href="/">
      <Logo src={logo} alt="Burberry Logo" />
    </Link>
  </Header>);
