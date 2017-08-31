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
    props.submenuOpen &&
    css`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `};
`;

const Header = styled.header``;

const Link = styled.a`
  display: block;
  background-color: #fff;
  padding: 1rem;
  font-size: 0.875rem;
  line-height: 1rem;
  position: relative;
  color: #171717;
  text-decoration: none;

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

const Submenu = props => (
  <Wrapper submenuOpen={props.submenuOpen}>
    <Header>
      <Link onClick={props.toggleSubmenu}>Home</Link>
    </Header>
    <Section>
      <Img src={`${process.env.PUBLIC_URL}/files/section-img.jpg`} alt="" />
      <Title>Men</Title>
    </Section>
    <Nav>
      <NavLinkStyled to="/products/men/new-arrivals" title="New Arrivals">
        New Arrivals
      </NavLinkStyled>
      <NavLinkStyled to="/products/men/clothing" title="Clothing">
        Clothing
      </NavLinkStyled>
      <NavLinkStyled to="/products/men/scarves" title="Scarves">
        Scarves
      </NavLinkStyled>
      <NavLinkStyled to="/products/men/accessories" title="Accessories">
        Accessories
      </NavLinkStyled>
      <NavLinkStyled to="/products/men/shoes" title="Shoes">
        Shoes
      </NavLinkStyled>
      <NavLinkStyled to="/products/men/fragnance" title="Fragnance">
        Fragnance
      </NavLinkStyled>
      <NavLinkStyled to="/products/men/gifts" title="Gifts">
        Gifts
      </NavLinkStyled>
      <NavLinkStyled to="/products/men/runaway" title="Runaway">
        Runaway
      </NavLinkStyled>
    </Nav>
  </Wrapper>
);

Submenu.propTypes = {
  toggleSubmenu: PropTypes.func.isRequired,
  submenuOpen: PropTypes.bool.isRequired,
};

export default Submenu;
