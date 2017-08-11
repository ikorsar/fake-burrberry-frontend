import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: "Lora", Helvetica, Arial, serif;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5rem;
  margin: 0;
  padding: 1rem .5rem;

  @media screen and (min-width: 48rem) {
    font-size: 1.5rem;
    line-height: 1.75rem;
    padding: 1.5rem 0;
  }
  
  @media screen and (min-width: 62rem) {
    margin: 0 0 .5rem;
    padding: 0;
  }
`;

export default props =>
  (<Title>
    {props.children}
  </Title>);
