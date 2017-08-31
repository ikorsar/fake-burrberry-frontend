import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import arrow from '../images/arrow.svg';
import ButtonSelect from './ButtonSelect';
import logo from '../Header/logo.svg';
import { Logo, LinkStyled } from '../Header';
import SubMenu from './Submenu';

const Sidebar = styled.aside`
  width: 274px;
  box-sizing: border-box;
  background-color: #fff;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 100;
  box-shadow: 0 0 2px #999;
  overflow-y: scroll;
  transition: transform 0.2s ease-in-out;
  transform: ${props => (props.isOpened ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)')};

  @media screen and (min-width: 62rem) {
    display: none;
  }
`;

const Menu = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  padding: 1.25rem 0.5rem;
  transition: transform 0.2s ease-in-out;
  overflow-y: scroll;

  ${props => props.isSubMenuOpen && css`transform: translate3d(-100%, 0, 0);`};
`;

const Nav = styled.nav`margin-top: 1.625rem;`;

const Categories = styled.div`
  display: flex;
  flex-flow: column;
`;

const Category = styled.button`
  font-family: 'Raleway', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1rem;
  display: block;
  margin-bottom: 1.5rem;
  color: #171717;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  padding: 0;
  border: none;
  text-align: left;

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

const categories = [
  { categoryName: 'Men' },
  { categoryName: 'Women' },
  { categoryName: 'Children' },
  { categoryName: 'Beauty' },
  { categoryName: 'Experience' },
];

export default class MobileMenu extends Component {
  state = {
    isSubMenuOpen: false,
    activeCategoryIndex: 0,
  };

  handleSubMenuToggle = (index) => {
    this.setState(prevState => ({
      isSubMenuOpen: !prevState.isSubMenuOpen,
      activeCategoryIndex: index,
    }));
  };

  handleSubMenuClose = () => {
    this.setState({
      isSubMenuOpen: false,
    });
  };

  render() {
    return (
      <Sidebar isOpened={this.props.isOpened}>
        <Menu isSubMenuOpen={this.state.isSubMenuOpen}>
          <LinkStyled to="/">
            <Logo src={logo} alt="Burberry Logo" />
          </LinkStyled>
          <Nav>
            <Categories>
              {categories.map((name, index) => (
                <Category
                  onClick={() => {
                    this.handleSubMenuToggle(index);
                  }}
                  key={name.categoryName}
                >
                  {name.categoryName}
                </Category>
              ))}
            </Categories>
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
        </Menu>
        <SubMenu
          mobileMenuClose={this.props.mobileMenuClose}
          subMenuClose={this.handleSubMenuClose}
          isSubMenuOpen={this.state.isSubMenuOpen}
          categories={categories[this.state.activeCategoryIndex]}
        />
      </Sidebar>
    );
  }
}

MobileMenu.propTypes = {
  mobileMenuClose: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
};
