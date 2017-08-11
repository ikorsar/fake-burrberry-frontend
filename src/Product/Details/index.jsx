import React from 'react';
import styled from 'styled-components';

import Button from '../../components/Buttons/Button';
import ButtonText from '../../components/Buttons/ButtonText';
import { Choose, Value } from '../../components/ChooseVariant';

import Title from '../Title';
import ButtonColor from '../ButtonColor';
import Sizes from '../Sizes';
import { Description, SubTitle, Text } from '../Shipping';

import Price from './Price';
import PartNumber from './PartNumber';

import { Colors, ColorsContainer, Details, Header } from './styled';
import { Desktop, DesktopLess } from '../../components/Breakpoints';

const Delivery = Description.extend`
  display: none;

  @media screen and (min-width: 62rem) {
    display: block;
    padding: .5rem 0 0;
  }
`;

const ButtonContainer = styled.div`
  padding: 0 .5rem;
  display: flex;
  flex-flow: column;

  @media screen and (min-width: 48rem) {
    padding: 0;
  }
`;

export default () =>
  (<Details>
    <Header>
      <Desktop>
        <Title>Long Cotton Gabardine Car Coat Coat Coat Coat Coat</Title>
      </Desktop>
      <Price price={110000} currency="RUB" />
      <DesktopLess>
        <PartNumber partNumber="39428531" />
      </DesktopLess>
    </Header>

    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
        <Colors>
          <Choose>
            Color:
            <Value>Honey</Value>
          </Choose>
          <ColorsContainer>
            <ButtonColor label="Black" color="#232122" />
            <ButtonColor label="Honey" color="#cfa880" />
          </ColorsContainer>
        </Colors>
        <ButtonContainer>
          <Button type="button" label="Add to bag" secondary />
        </ButtonContainer>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
        <Desktop>
          <Sizes />
        </Desktop>
        <ButtonContainer>
          <Button type="button" label="Find in store" />
        </ButtonContainer>
        <DesktopLess>
          <ButtonText type="button" label="Need size help?" />
        </DesktopLess>
      </div>
    </div>
    <Delivery>
      <SubTitle>Free Next Day Delivery</SubTitle>
      <Text>Order before 7pm Monday to Thursday for delivery the next day</Text>
    </Delivery>
  </Details>);
