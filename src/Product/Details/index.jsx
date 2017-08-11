import React from 'react';

import Button from '../../components/Buttons/Button';
import ButtonText from '../../components/Buttons/ButtonText';
import ButtonColor from '../ButtonColor';

import Price from './Price';
import PartNumber from './PartNumber';

import { Colors, ColorsChoosen, ColorsContainer, Controls, Details, Header } from './styled';

export default () =>
  (<Details>
    <Header>
      <Price priceValue="110 000" priceCurrency="руб" />
      <PartNumber partNumber="39428531" />
    </Header>

    <Colors>
      <ColorsChoosen>Color: Honey</ColorsChoosen>
      <ColorsContainer>
        <ButtonColor label="Black" color="#232122" />
        <ButtonColor label="Honey" color="#cfa880" />
      </ColorsContainer>
    </Colors>

    <Controls>
      <Button type="button" label="Select a size" secondary />
      <Button type="button" label="Find in store" />
      <ButtonText type="button" label="Need size help?" />
    </Controls>
  </Details>);
