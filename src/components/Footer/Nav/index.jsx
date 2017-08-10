import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import Link from './Link';

const Nav = styled.nav`
  display: none;
  margin-bottom: 2rem;

  @media screen and (min-width: 48rem) {
    display: block;
  }
`;

export default () =>
  (<div className="row">
    <div className="col-md-3">
      <Nav>
        <Title title="Customer service" />
        <Link href="#" title="Contact Us" />
        <Link href="#" title="Payment" />
        <Link href="#" title="Shipping" />
        <Link href="#" title="Returns" />
        <Link href="#" title="Faqs" />
        <Link href="#" title="Live Chat" />
        <Link href="#" title="The Burberry App" />
        <Link href="#" title="Store Locator" />
      </Nav>
    </div>
    <div className="col-md-3">
      <Nav>
        <Title title="Our company" />
        <Link href="#" title="Our History" />
        <Link href="#" title="Burberry Group Plc" />
        <Link href="#" title="Careers" />
        <Link href="#" title="Corporate Responsibility" />
        <Link href="#" title="Site Map" />
      </Nav>
    </div>
    <div className="col-md-3">
      <Nav>
        <Title title="Legal & Cookies" />
        <Link href="#" title="Terms & Conditions" />
        <Link href="#" title="Privacy Policy" />
        <Link href="#" title="Cookie Policy" />
        <Link href="#" title="Accessibility" />
        <Link href="#" title="Japan Only - SCTL indications" />
      </Nav>
    </div>
  </div>);
