import React from 'react';
import styled from 'styled-components';

import Title from '../Title';
import Price from '../Details/Price';
import Button from '../../components/Buttons/Button';
import ButtonText from '../../components/Buttons/ButtonText';
import ButtonColor from '../ButtonColor';

import {Colors, ColorsChoosen, ColorsContainer} from '../Details/styled';

const Info = styled.section`
  background-color: ${props => props.color};
`;

const Img = styled.img`
  height: 650px;
  display: block;
`;

export default props => (
  <Info color={props.color}>
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <Img src="/files/product-desktop.jpg" alt=""/>
        </div>
        <div className="col-lg-6">
          <Title>Long Cotton Gabardine Car Coat Coat Coat Coat Coat</Title>
          <Price price={110000} currency="RUB"/>

          <div className="row">
            <div className="col-lg-6">
              <Colors>
                <ColorsChoosen>Color: Honey</ColorsChoosen>
                <ColorsContainer>
                  <ButtonColor label="Black" color="#232122"/>
                  <ButtonColor label="Honey" color="#cfa880"/>
                </ColorsContainer>
              </Colors>
              <Button type="button" label="Add to bag" secondary/>
            </div>
            <div className="col-lg-6">
              <ButtonText type="button" label="Need size help?"/>
              <Button type="button" label="Find in store"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Info>
)