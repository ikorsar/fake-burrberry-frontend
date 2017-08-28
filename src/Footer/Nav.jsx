import React from 'react';
import styled from 'styled-components';

import FindStore from './FindStore';

const Nav = styled.nav`
  display: none;
  margin-bottom: 2rem;

  @media screen and (min-width: 48rem) {
    display: block;
  }

  @media screen and (min-width: 62rem) {
    margin-bottom: 3rem;
  }
`;

export const Title = styled.h3`
  font-size: .75rem;
  font-weight: bold;
  line-height: .875rem;
  margin: 0 0 1rem;
  text-transform: uppercase;
`;

export const Link = styled.a`
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
      </Nav>
    </div>
    <div className="col-md-3">
      <Nav>
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
      </Nav>
    </div>
    <div className="col-md-3">
      <Nav>
        <Title>Legal & Cookies</Title>
        <Link href="#" title="Terms & Conditions">
          Terms & Conditions
        </Link>
        <Link href="#" title="Privacy Policy">
          Privacy Policy
        </Link>
        <Link href="#" title="Cookie Policy">
          Cookie Policy
        </Link>
        <Link href="#" title="Accessibility">
          Accessibility
        </Link>
        <Link href="#" title="Japan Only - SCTL indications">
          Japan Only - SCTL indications
        </Link>
      </Nav>
    </div>
    <div className="col-lg-3">
      <FindStore />
    </div>
  </div>);
