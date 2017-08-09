import React from "react";
import styled from "styled-components";

import PageFooterNav from "./Nav";
import PageFooteButtons from "./Btns";

const PageFooter = styled.footer`
  padding: 2rem 0;
  background-color: #f3f3f3;
  
  @media screen and (min-width: 48rem) {
    padding-right: 0;
    padding-left: 0;
  }
`;

const PageFooterHelp = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.25rem;
  margin: 1.5rem 0 1rem;
  text-align: center;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const PageFooterHelpLink = styled.a`
  font-family: "Lora", Helvetica, Arial, serif;
  font-size: .875rem;
  font-style: italic;
  line-height: 1rem;
  display: block;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  color: #171717;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

export default () =>
  ( <PageFooter>
    <div className="container">
      <PageFooterNav/>
      <PageFooteButtons/>
    </div>
    <PageFooterHelp/>
    <PageFooterHelpLink href="#" title="Find out more and contact us">Find out more and contact us</PageFooterHelpLink>
  </PageFooter>);