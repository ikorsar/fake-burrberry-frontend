import React from 'react';
import styled from 'styled-components';

import Link from './Link';

const Nav = styled.nav`
  display: none;
  margin-bottom: 2rem;

  @media screen and (min-width: 48rem) {
    display: block;
  }
`;

const Title = styled.h3`
  font-size: .75rem;
  font-weight: bold;
  line-height: .875rem;
  margin: 0 0 1rem;
  text-transform: uppercase;
`;

export default () =>
  (<div className="row">
    <div className="col-md-3">
      <Nav>
        <Title>Customer service</Title>
        <Link href="#">Contact Us</Link>
        <Link href="#">Payment</Link>
        <Link href="#">Shipping</Link>
        <Link href="#">Returns</Link>
        <Link href="#">Faqs</Link>
        <Link href="#">Live Chat</Link>
        <Link href="#">The Burberry App</Link>
        <Link href="#">Store Locator</Link>
      </Nav>
    </div>
    <div className="col-md-3">
      <Nav>
        <Title>Our company</Title>
        <Link href="#">Our History</Link>
        <Link href="#">Burberry Group Plc</Link>
        <Link href="#">Careers</Link>
        <Link href="#">Corporate Responsibility</Link>
        <Link href="#">Site Map</Link>
      </Nav>
    </div>
    <div className="col-md-3">
      <Nav>
        <Title>Legal & Cookies</Title>
        <Link href="#">Terms & Conditions</Link>
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Cookie Policy</Link>
        <Link href="#">Accessibility</Link>
        <Link href="#">Japan Only - SCTL indications</Link>
      </Nav>
    </div>
  </div>);
