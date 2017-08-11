import React from 'react';
import styled from 'styled-components';

import Button from '../../components/Buttons/Button';
import ButtonText from '../../components/Buttons/ButtonText';
import { Choose, Value } from '../../components/ChooseVariant';

const Sizes = styled.div`
  padding-top: .5rem;

  @media screen and (min-width: 62rem) {
    padding-top: 0;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  display: flex;
  margin-bottom: 1rem;

  button + button {
    margin-left: .5rem;
  }
`;

export default () =>
  (<Sizes>
    <Header>
      <Choose>
        Size:
        <Value>XL</Value>
      </Choose>
      <ButtonText type="button" label="Need size help?" />
    </Header>
    <Content>
      <Button type="button" label="S" small />
      <Button type="button" label="M" small />
      <Button type="button" label="L" small />
      <Button type="button" label="XL" small active />
    </Content>
  </Sizes>);
