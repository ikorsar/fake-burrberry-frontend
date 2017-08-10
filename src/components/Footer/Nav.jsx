import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: none;
  margin-bottom: 2rem;

  @media screen and (min-width: 48rem) {
    display: block;
  }
`;

const NavTitle = styled.h3`
  font-size: .75rem;
  font-weight: bold;
  line-height: .875rem;
  margin: 0 0 1rem;
  text-transform: uppercase;
`;

const NavLink = styled.a`
  font-size: .75rem;
  font-weight: 600;
  line-height: 1rem;
  display: block;
  margin-bottom: .75rem;
  text-decoration: none;
  color: #999;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default () =>
  (<div className="row">
    <div className="col-md-3">
      <Nav>
        <NavTitle>Customer service</NavTitle>
        <NavLink href="#">Contact Us</NavLink>
        <NavLink href="#">Payment</NavLink>
        <NavLink href="#">Shipping</NavLink>
        <NavLink href="#">Returns</NavLink>
        <NavLink href="#">Faqs</NavLink>
        <NavLink href="#">Live Chat</NavLink>
        <NavLink href="#">The Burberry App</NavLink>
        <NavLink href="#">Store Locator</NavLink>
      </Nav>
    </div>
    <div className="col-md-3">
      <Nav>
        <NavTitle>Our company</NavTitle>
        <NavLink href="#">Our History</NavLink>
        <NavLink href="#">Burberry Group Plc</NavLink>
        <NavLink href="#">Careers</NavLink>
        <NavLink href="#">Corporate Responsibility</NavLink>
        <NavLink href="#">Site Map</NavLink>
      </Nav>
    </div>
    <div className="col-md-3">
      <Nav>
        <NavTitle>Legal & Cookies</NavTitle>
        <NavLink href="#">Terms & Conditions</NavLink>
        <NavLink href="#">Privacy Policy</NavLink>
        <NavLink href="#">Cookie Policy</NavLink>
        <NavLink href="#">Accessibility</NavLink>
        <NavLink href="#">Japan Only - SCTL indications</NavLink>
      </Nav>
    </div>
  </div>);
