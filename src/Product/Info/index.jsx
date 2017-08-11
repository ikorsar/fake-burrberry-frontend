import React from 'react';
import styled from 'styled-components';

import Title from '../Title';
import Price from '../Details/Price';
import Button from '../../components/Buttons/Button';
import ButtonColor from '../ButtonColor';
import {Choose, Value} from '../../components/ChooseVariant';

import { Description, SubTitle, Text } from '../Shipping';

import {Colors, ColorsContainer} from '../Details/styled';

import Sizes from '../Sizes';

const Info = styled.section`
  background-color: ${props => props.color};
`;

const Img = styled.img`
  height: 650px;
  display: block;
`;

const Delivery = Description.extend`
  @media screen and (min-width: 62rem) {
    padding: .5rem 0 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: column;
`;

export default props => (
  <Info color={props.color}>
    <div className="container">
      <div className="row middle-lg">
        <div className="col-lg-6">
          <Img src="/files/product-desktop.jpg" alt=""/>
        </div>
        <div className="col-lg-6">
          <Title>Long Cotton Gabardine Car Coat Coat Coat Coat Coat</Title>
          <Price price={110000} currency="RUB"/>

          <div className="row">
            <div className="col-lg-6">
              <Colors>
                <Choose>Color:
                  <Value>Honey</Value>
                </Choose>
                <ColorsContainer>
                  <ButtonColor label="Black" color="#232122"/>
                  <ButtonColor label="Honey" color="#cfa880"/>
                </ColorsContainer>
              </Colors>
              <ButtonContainer>
              <Button type="button" label="Add to bag" secondary/>
              </ButtonContainer>
            </div>
            <div className="col-lg-6">
              <Sizes/>
              <ButtonContainer>
              <Button type="button" label="Find in store"/>
              </ButtonContainer>
            </div>
          </div>
          
          <Delivery>
            <SubTitle>Free Next Day Delivery</SubTitle>
            <Text>Order before 7pm Monday to Thursday for delivery the next day</Text>
          </Delivery>
        </div>
      </div>
    </div>
  </Info>
)