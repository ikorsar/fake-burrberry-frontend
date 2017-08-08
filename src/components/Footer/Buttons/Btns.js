import React from 'react';
import styled from 'styled-components';

const PageFooterButtons = styled.div`
  padding-right: .5rem;
  padding-left: .5rem;
  
  @media screen and (min-width: 48rem) {
    display: flex;
    padding-right: 0;
    padding-left: 0;
  }
`;

const PageFooterButton = styled.button`
  font-family: 'Raleway', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  font-weight: 400;
  line-height: 1rem;
  display: block;
  margin-bottom: 1rem;
  padding: 0;
  text-decoration: none;
  color: #999;
  border: none;
  background-color: transparent;
  
  @media screen and (min-width: 48rem) {
    margin: 0 1.5rem 0 0;
  }
`;

export default () => (
  <PageFooterButtons>
    <PageFooterButton type="button">Shipping country: Russian Federation</PageFooterButton>
    <PageFooterButton type="button">Language: English</PageFooterButton>
  </PageFooterButtons>
);