import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';

const PriceStyled = styled.h2`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.19;
  margin: 0;
  padding: 0;
  text-transform: none;
  color: #171717;
`;

export default function Price(props) {
  return (
    <PriceStyled>
      <FormattedNumber
        value={props.price}
        style="currency" // eslint-disable-line
        currency={props.currency}
        currencyDisplay="symbol"
        minimumFractionDigits={0}
      />
    </PriceStyled>
  );
}

Price.propTypes = {
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
