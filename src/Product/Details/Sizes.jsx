import React from 'react';
import styled from 'styled-components';

import Button from '../../components/Buttons/Button';
import { ButtonText } from '../../components/Buttons/ButtonText';

const Sizes = styled.div`
  padding-top: .5rem;
  display: flex;
  flex-flow: column;

  @media screen and (min-width: 62rem) {
    padding-top: 0;
  }
`;

const Header = styled.div`
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  display: flex;
  order: 2;

  @media screen and (min-width: 62rem) {
    display: flex;
    order: 1;
  }
`;

const Content = styled.div`
  margin-bottom: 1rem;
  display: none;

  button {
    margin-right: .5rem;
  }

  @media screen and (min-width: 62rem) {
    display: flex;
    order: 2;
  }
`;

const Size = styled.p`
  font-family: Raleway;
  font-size: .75rem;
  line-height: 1rem;
  color: #171717;
  padding: 0;
  text-align: left;
  margin: 0 0 1rem;
  display: none;

  @media screen and (min-width: 62rem) {
    margin-bottom: 0;
    display: block;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-flow: column;
  order: 1;

  @media screen and (min-width: 62rem) {
    order: 3;
  }
`;

export default () =>
  (<Sizes>
    <Header>
      <Size>
        Size: <strong>XL</strong>
      </Size>
      <ButtonText type="button">Need size help?</ButtonText>
    </Header>
    <Content>
      <Button type="button" label="S" small />
      <Button type="button" label="M" small />
      <Button type="button" label="L" small />
      <Button type="button" label="XL" small active />
    </Content>
    <Footer>
      <Button type="button" label="Find in store" />
    </Footer>
  </Sizes>);
