import React from 'react';
import styled from 'styled-components';

const PageFooterNav = styled.nav`
  display: none;
  margin-bottom: 2rem;

  @media screen and (min-width: 48rem) {
    display: block;
  }
`;

const PageFooterNavTitle = styled.h3`
  font-size: .75rem;
  font-weight: bold;
  line-height: .875rem;
  margin: 0 0 1rem;
  text-transform: uppercase;
`;

const PageFooterNavLink = styled.a`
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
      <PageFooterNav>
        <PageFooterNavTitle>Customer service</PageFooterNavTitle>
        <PageFooterNavLink href="#">Contact Us</PageFooterNavLink>
        <PageFooterNavLink href="#">Payment</PageFooterNavLink>
        <PageFooterNavLink href="#">Shipping</PageFooterNavLink>
        <PageFooterNavLink href="#">Returns</PageFooterNavLink>
        <PageFooterNavLink href="#">Faqs</PageFooterNavLink>
        <PageFooterNavLink href="#">Live Chat</PageFooterNavLink>
        <PageFooterNavLink href="#">The Burberry App</PageFooterNavLink>
        <PageFooterNavLink href="#">Store Locator</PageFooterNavLink>
      </PageFooterNav>
    </div>
    <div className="col-md-3">
      <PageFooterNav>
        <PageFooterNavTitle>Our company</PageFooterNavTitle>
        <PageFooterNavLink href="#">Our History</PageFooterNavLink>
        <PageFooterNavLink href="#">Burberry Group Plc</PageFooterNavLink>
        <PageFooterNavLink href="#">Careers</PageFooterNavLink>
        <PageFooterNavLink href="#">Corporate Responsibility</PageFooterNavLink>
        <PageFooterNavLink href="#">Site Map</PageFooterNavLink>
      </PageFooterNav>
    </div>
    <div className="col-md-3">
      <PageFooterNav>
        <PageFooterNavTitle>Legal & Cookies</PageFooterNavTitle>
        <PageFooterNavLink href="#">Terms & Conditions</PageFooterNavLink>
        <PageFooterNavLink href="#">Privacy Policy</PageFooterNavLink>
        <PageFooterNavLink href="#">Cookie Policy</PageFooterNavLink>
        <PageFooterNavLink href="#">Accessibility</PageFooterNavLink>
        <PageFooterNavLink href="#">Japan Only - SCTL indications</PageFooterNavLink>
      </PageFooterNav>
    </div>
  </div>);
