import React from 'react';
import styled from 'styled-components';

const ButtonText = styled.button`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  display: block;
  align-self: flex-start;
  margin: .5rem 0 0;
  padding: 0;
  text-align: left;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export default props =>
  (<ButtonText type={props.type}>
    {props.label}
  </ButtonText>);
