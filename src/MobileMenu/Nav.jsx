import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import arrow from '../images/arrow.svg';
import ButtonSelect from './ButtonSelect';
import logo from '../Header/logo.svg';
import { Logo, LinkStyled } from '../Header';

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  padding: 1.25rem 0.5rem;
  transition: transform 0.2s ease-in-out;
  overflow-y: scroll;

  ${props => props.submenuOpen && css`transform: translate3d(-100%, 0, 0);`};
`;

const Nav = styled.nav`margin-top: 1.625rem;`;

const Category = styled.a`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1rem;
  display: block;
  margin-bottom: 1.5rem;
  text-decoration: none;
  color: #171717;
  position: relative;
  cursor: pointer;

  &:last-child {
    margin-bottom: 3rem;
  }

  &::after {
    content: '';
    display: block;
    background: url(${arrow}) 0 0 no-repeat;
    background-size: cover;
    width: 12px;
    height: 6px;
    transform: rotate(-90deg);
    position: absolute;
    top: 5px;
    right: -2px;
  }
`;

const Link = styled.a`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1rem;
  display: block;
  margin-bottom: 1.5rem;
  text-decoration: none;
  color: #171717;

  &:last-child {
    margin-bottom: 3rem;
  }
`;

const Title = styled.h3`
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 0.875rem;
  margin: 0 0 1.125rem;
  text-transform: uppercase;
`;

const Buttons = styled.div`
  display: flex;
  flex-flow: column;
`;

const Menu = props => (
  <Wrapper submenuOpen={props.submenuOpen}>
    <LinkStyled to="/">
      <Logo src={logo} alt="Burberry Logo" />
    </LinkStyled>
    <Nav>
      <div>
        {['Women', 'Men', 'Children', 'Beauty', 'Experience'].map(link => (
          <Category onClick={props.toggleSubmenu} key={link}>
            {link}
          </Category>
        ))}
      </div>
      <div>
        <Title>Customer service</Title>
        <Link href="#" title="Contact Us">
          Contact Us
        </Link>
        <Link href="#" title="Payment">
          Payment
        </Link>
        <Link href="#" title="Shipping">
          Shipping
        </Link>
        <Link href="#" title="Returns">
          Returns
        </Link>
        <Link href="#" title="Faqs">
          Faqs
        </Link>
        <Link href="#" title="Live Chat">
          Live Chat
        </Link>
        <Link href="#" title="The Burberry App">
          The Burberry App
        </Link>
        <Link href="#" title="Store Locator">
          Store Locator
        </Link>
      </div>
      <div>
        <Title>Our company</Title>
        <Link href="#" title="Our History">
          Our History
        </Link>
        <Link href="#" title="Burberry Group Plc">
          Burberry Group Plc
        </Link>
        <Link href="#" title="Careers">
          Careers
        </Link>
        <Link href="#" title="Corporate Responsibility">
          Corporate Responsibility
        </Link>
        <Link href="#" title="Site Map">
          Site Map
        </Link>
      </div>
    </Nav>
    <Buttons>
      <ButtonSelect options={['United Kingdom (£)', 'Russian Federation (₽)']} />
      <ButtonSelect options={['English', 'Russian']} />
    </Buttons>
  </Wrapper>
);

Menu.propTypes = {
  toggleSubmenu: PropTypes.func.isRequired,
  submenuOpen: PropTypes.bool.isRequired,
};

export default Menu;
