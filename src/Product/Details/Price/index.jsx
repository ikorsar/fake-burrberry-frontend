import React from 'react';
import styled from 'styled-components';

const Price = styled.h2`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.19;
  margin: 0;
  padding: 0;
  text-transform: none;
  color: #171717;
`;

export default props =>
  (<Price>
    {props.priceValue} {props.priceCurrency}
  </Price>);
