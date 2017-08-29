import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import hamburger from './hamburger.svg';
import logo from './logo.svg';
import arrow from '../images/arrow.svg';

const HeaderStyled = styled.header`
  padding: 1.125rem 0;

  @media screen and (min-width: 48rem) {
    padding: 1.5rem 0;
  }

  @media screen and (min-width: 64rem) {
    padding: 2rem 0;
  }
`;

const ButtonMenu = styled.a`
  display: flex;

  .menu-opened & {
    pointer-events: none;
  }

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const Hamburger = styled.img`
  width: 1rem;
  height: 0.625rem;
`;

export const LinkStyled = styled(Link)`
  margin: auto;
  display: block;
`;

export const Logo = styled.img`
  height: 0.75rem;
  display: block;
  margin: 0 auto;

  @media screen and (min-width: 48rem) {
    height: 1rem;
  }
`;

const Country = styled.button`
  font-family: 'Raleway', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  line-height: 1.33;
  font-weight: 600;
  text-align: left;
  border: none;
  background-color: transparent;
  padding: 0;
  color: #999;
  display: none;
  position: relative;

  @media screen and (min-width: 48rem) {
    display: flex;
    align-items: center;
  }
`;

const Arrow = styled.img`
  width: 12px;
  height: 6px;
  margin-left: 0.5rem;
`;

class Header extends Component {
  state = {};

  render() {
    return (
      <HeaderStyled>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="row middle-xs">
                <div className="col-xs-2 col-md-4">
                  <ButtonMenu onClick={this.props.menuOpen}>
                    <Hamburger src={hamburger} />
                  </ButtonMenu>
                  <Country>
                    Shopping in: United Kingdom (£)
                    <Arrow src={arrow} />
                  </Country>
                </div>
                <div className="col-xs-8 col-md-4">
                  <LinkStyled to="/">
                    <Logo src={logo} alt="Burberry Logo" />
                  </LinkStyled>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeaderStyled>
    );
  }
}

Header.propTypes = {
  menuOpen: PropTypes.func.isRequired,
};

export default Header;
