import React from 'react';
import styled from 'styled-components';
import Responsive from 'react-responsive';

import Button from '../../components/Buttons/Button';

import { Title } from '../styled';
import Colors from './Colors';
import Sizes from './Sizes';

import { Description, SubTitle, Text } from '../Shipping';

import Price from './Price';

const MediaQuery = require('react-responsive');

const PartNumber = styled.p`
  font-size: .75rem;
  line-height: 1.19;
  margin: 0;
  color: #171717;
`;

const Delivery = Description.extend`
  display: none;

  @media screen and (min-width: 62rem) {
    display: block;
    padding: .5rem 0 0;
  }
`;

const Buttons = styled.div`
  padding: 0 .5rem;
  display: flex;
  flex-flow: column;

  @media screen and (min-width: 48rem) {
    padding: 0;
  }
`;

const Details = styled.article`@media screen and (min-width: 48rem) {margin: 0;}`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem .5rem;

  @media screen and (min-width: 48rem) {
    padding: 0 0 1rem;
  }

  @media screen and (min-width: 62rem) {
    display: block;
    padding-bottom: 3rem;
  }
`;

export default () =>
  (<Details>
    <Header>
      <MediaQuery minWidth={992}>
        <Title>Long Cotton Gabardine Car Coat Coat Coat Coat Coat</Title>
      </MediaQuery>
      <Price price={110000} currency="RUB" />
      <MediaQuery maxWidth={991}>
        <PartNumber>Item 39428531</PartNumber>
      </MediaQuery>
    </Header>

    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
        <Colors />
        <Buttons>
          <Button type="button" label="Add to bag" secondary />
        </Buttons>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
        <Sizes />
      </div>
    </div>
    <Delivery>
      <SubTitle>Free Next Day Delivery</SubTitle>
      <Text>Order before 7pm Monday to Thursday for delivery the next day</Text>
    </Delivery>
  </Details>);
