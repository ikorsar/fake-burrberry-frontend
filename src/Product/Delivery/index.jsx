import React from 'react';
import styled from 'styled-components';

import { Description, SubTitle, Text } from '../Shipping';

const Delivery = styled.section`
  @media screen and (min-width: 48rem) {
    margin-bottom: 1.5rem;
  }
  
  @media screen and (min-width: 62rem) {
    margin-bottom: 4rem;
  }
`;

const Img = styled.img`
  display: none;

  @media screen and (min-width: 48rem) {
    display: block;
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  position: relative;
  text-align: left;
  text-transform: uppercase;
  border: none;
  background-color: transparent;
  padding: 0 0 1rem;
  margin: 0;
  display: none;

  @media screen and (min-width: 48rem) {
    display: block;
  }
`;

export default () =>
  (<Delivery>
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <Img src="/files/delivery.jpg" alt="Delivery box" />
        </div>
        <div className="col-xs-12 col-md-5">
          <Description>
            <Title>Delivery</Title>
            <SubTitle>Free Next Day Delivery</SubTitle>
            <Text>Order before 7pm Monday to Thursday for delivery the next day</Text>
            <SubTitle>Collect-in-Store</SubTitle>
            <Text>Order online today and pick up your items in store as early as tomorrow</Text>
            <SubTitle>Free Returns</SubTitle>
            <Text>Enjoy free returns on your order</Text>
            <SubTitle>Free Gift Packaging</SubTitle>
            <Text>Discover our gift packaging, a gold lined box tied with a coloured ribbon</Text>
          </Description>
        </div>
      </div>
    </div>
  </Delivery>);
