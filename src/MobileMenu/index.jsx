import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from '../Header/logo.svg';
import arrow from '../images/arrow.svg';
import { Logo, LinkStyled } from '../Header';
import ButtonSelect from './ButtonSelect';

const Wrapper = styled.aside`
  width: 274px;
  box-sizing: border-box;
  background-color: #fff;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 100;
  padding: 1.25rem 0.5rem;
  box-shadow: 0 0 2px #999;
  overflow-y: scroll;
  transition: all 0.2s ease-in-out;
  transform: ${props => (props.isOpened ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)')};
`;

const Nav = styled.nav`margin-top: 1.625rem;`;

const Category = styled(NavLink)`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1rem;
  display: block;
  margin-bottom: 1.5rem;
  text-decoration: none;
  color: #171717;
  position: relative;
  display: block;

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

const MobileMenu = props => (
  <Wrapper isOpened={props.isOpened}>
    <LinkStyled to="/">
      <Logo src={logo} alt="Burberry Logo" />
    </LinkStyled>
    <Nav>
      <div>
        <Category to="/products/women/">Women</Category>
        <Category to="/products/men/">Men</Category>
        <Category to="/products/children/">Children</Category>
        <Category to="/products/beauty/">Beauty</Category>
        <Category to="/products/experience/">Experience</Category>
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

MobileMenu.propTypes = {
  isOpened: PropTypes.bool.isRequired,
};

export default MobileMenu;