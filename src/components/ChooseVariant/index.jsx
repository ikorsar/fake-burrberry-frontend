import React from 'react';
import styled from 'styled-components';

export const Choose = styled.button`
  font-family: Raleway;
	font-size: .75rem;
	line-height: 1rem;
	color: #171717;
	padding: 0;
	text-align: left;
  text-decoration: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Value = styled.span`

  @media screen and (min-width: 62rem) {
    font-weight: bold;
  }
  
`;

export default props => (
  <Choose>{props.label}
    <Value> {props.children}</Value>
  </Choose>
)