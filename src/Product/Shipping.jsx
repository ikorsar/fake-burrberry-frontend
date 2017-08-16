import React from 'react';
import styled from 'styled-components';

import Accordion from '../components/Accordion';

const Shipping = styled.section`
  border-bottom: 1px solid #c6c6c6;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

export const Description = styled.article`
  padding: 0 .5rem;

  @media screen and (min-width: 48rem) {
    padding: 0;
  }

  @media screen and (min-width: 62rem) {
    padding-left: 5.25rem;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
`;

export const SubTitle = styled.h4`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  font-weight: bold;
  line-height: .875rem;
  margin: 0 0 .25rem;
`;

export const Text = styled.p`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  margin: 0 0 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default () =>
  (<Shipping>
    <Accordion title="Shipping & Returns">
      <div className="container">
        <Description>
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
    </Accordion>
  </Shipping>);
