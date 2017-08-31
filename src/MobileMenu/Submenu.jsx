import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import arrow from '../images/arrow.svg';

const Wrapper = styled.div`
  position: absolute;
  transition: all 0.2s ease-in-out;
  transform: translate3d(-100%, 0, 0);
  background-color: #fff;
  opacity: 0;
  overflow-y: scroll;

  ${props =>
    props.isSubMenuOpen &&
    css`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `};
`;

const Header = styled.header`
  display: flex;
  flex-flow: column;
`;

const Link = styled.button`
  font-family: 'Raleway', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.875rem;
  line-height: 1rem;
  display: block;
  background-color: #fff;
  padding: 1rem;
  position: relative;
  color: #171717;
  background-color: transparent;
  border: none;
  text-align: left;

  &::before {
    content: '';
    display: block;
    background-image: url(${arrow});
    background-size: cover;
    width: 0.75rem;
    height: 0.375rem;
    position: absolute;
    top: 50%;
    left: 0.5rem;
    margin-left: -5px;
    transform: translateY(-50%) rotate(90deg);
  }
`;

const Section = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const Img = styled.img`display: block;`;

const Title = styled.h3`
  font-family: 'Lora', Helvetica, Arial, serif;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1;
  color: #171717;
  margin: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 1rem 0.5rem;
`;

const Nav = styled.nav`padding: 0 0.5rem;`;

const NavLinkStyled = styled(NavLink)`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1rem;
  display: block;
  margin-bottom: 1.5rem;
  text-decoration: none;
  color: #171717;

  &.active {
    font-weight: bold;
  }
`;

const links = [
  {
    title: 'New Arrivals',
    to: '/products/men/new-arrivals',
  },
  {
    title: 'Clothing',
    to: '/products/men/clothing',
  },
  {
    title: 'Scarves',
    to: '/products/men/scarves',
  },
  {
    title: 'Accessories',
    to: '/products/men/accessories',
  },
  {
    title: 'Shoes',
    to: '/products/men/shoes',
  },
  {
    title: 'Fragnance',
    to: '/products/men/fragnance',
  },
  {
    title: 'Gifts',
    to: '/products/men/gifts',
  },
  {
    title: 'Runaway',
    to: '/products/men/runaway',
  },
];

const SubMenu = props => (
  <Wrapper isSubMenuOpen={props.isSubMenuOpen}>
    <Header>
      <Link onClick={props.subMenuClose}>Home</Link>
    </Header>
    <Section>
      <Img src={`${process.env.PUBLIC_URL}/files/section-img.jpg`} alt="" />
      <Title>{props.categories.categoryName}</Title>
    </Section>
    <Nav>
      {links.map(link => (
        <NavLinkStyled
          to={link.to}
          title={link.title}
          key={link.title}
          onClick={props.mobileMenuClose}
        >
          {link.title}
        </NavLinkStyled>
      ))}
    </Nav>
  </Wrapper>
);

SubMenu.propTypes = {
  mobileMenuClose: PropTypes.func.isRequired,
  subMenuClose: PropTypes.func.isRequired,
  isSubMenuOpen: PropTypes.bool.isRequired,
  categories: PropTypes.shape({
    categoryName: PropTypes.string,
  }).isRequired,
};

export default SubMenu;
