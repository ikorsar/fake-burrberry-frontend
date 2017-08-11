import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.1875rem;
  position: relative;
  margin: 0 0 1rem;
  text-transform: uppercase;
  color: #171717;

  @media screen and (min-width: 48rem) {
    line-height: 19px;
    margin: 0 0 1rem;
  }

  @media screen and (min-width: 62rem) {
    line-height: 19px;
    margin: 0 0 2rem;
  }
`;

export default props =>
  (<Title>
    {props.children}
  </Title>);
