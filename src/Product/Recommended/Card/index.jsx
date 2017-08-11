import React from 'react';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';

const Card = styled.a`
  display: block;
  margin-bottom: 2rem;
  text-decoration: none;
  color: #171717;

  @media screen and (min-width: 48rem) {
    margin-bottom: .5rem;
  }
`;

const Photo = styled.img`
  display: block;
  width: 100%;
`;

const Title = styled.h3`
  font-family: "Lora", Helvetica, Arial, serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.19;
  margin: .5rem 0;
  padding: 0;
  
  @media screen and (min-width: 62rem) {
    font-size: .75rem;
    font-weight: 600;
    line-height: 1.67;
    margin-top: 1rem; 
  }
`;

const Price = styled.h4`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  font-weight: 400;
  line-height: 1.17;
  margin: 0;
  color: #999;
  
  @media screen and (min-width: 62rem) {
    line-height: 1.33;
    color: #171717;
  }
`;

export default props =>
  (<Card href="#" title={props.title}>
    <Photo src={`/files/${props.photoName}.jpg`} alt={props.title} />
    <Title>
      {props.title}
    </Title>
    <Price>
      <FormattedNumber
        value={props.price}
        style="currency"
        currency={props.currency}
        currencyDisplay="symbol"
        minimumFractionDigits={0}
      />
    </Price>
  </Card>);
