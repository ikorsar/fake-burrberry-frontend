import React from 'react';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';

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
    <FormattedNumber
      value={props.price}
      style="currency"
      currency={props.currency}
      currencyDisplay="symbol"
      minimumFractionDigits={0}
    />
  </Price>);
