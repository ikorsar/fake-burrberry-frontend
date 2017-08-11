import React from 'react';
import styled from 'styled-components';

export const Choose = styled.p`
  font-family: Raleway;
  font-size: .75rem;
  line-height: 1rem;
  color: #171717;
  padding: 0;
  text-align: left;
  margin: 0 0 1rem;

  @media screen and (min-width: 62rem) {
    margin-bottom: 0;
  }
`;

export const Value = styled.span`@media screen and (min-width: 62rem) {font-weight: bold;}`;

export default props =>
  (<Choose>
    {props.label}
    <Value>
      {props.children}
    </Value>
  </Choose>);
