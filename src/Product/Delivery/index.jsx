import React from 'react';
import styled from 'styled-components';

import AccordionDelivery from './Accordion';

const Description = styled.article`
  padding: 0 .5rem;

  @media screen and (min-width: 48rem) {
    padding: 0;
  }
`;

const Img = styled.img`
  display: none;

  @media screen and (min-width: 48rem) {
    display: block;
    width: 100%;
  }
`;

const Title = styled.h2`
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

const SubTitle = styled.h4`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  font-weight: bold;
  line-height: .875rem;
  margin: 0 0 .25rem;
`;

const Text = styled.p`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  margin: 0 0 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default () =>
  (<AccordionDelivery title="Shipping & Returns">
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
  </AccordionDelivery>);
