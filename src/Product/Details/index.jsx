import React, { Component } from 'react';

import Button from '../../components/Buttons/Button';
import ButtonText from '../../components/Buttons/ButtonText';
import ButtonColor from '../ButtonColor';

import Price from './Price';
import PartNumber from './PartNumber';

import {
  ProductColors,
  ProductColorsChoosen,
  ProductColorsContainer,
  ProductControls,
  ProductDetails,
  ProductHeader,
} from './styled';

class Details extends Component {
  render() {
    return (
      <ProductDetails>
        <ProductHeader>
          <Price priceValue="110 000" priceCurrency="руб" />
          <PartNumber partNumber="39428531" />
        </ProductHeader>

        <ProductColors>
          <ProductColorsChoosen>Color: Honey</ProductColorsChoosen>
          <ProductColorsContainer>
            <ButtonColor label="Black" bgColorValue="#232122" />
            <ButtonColor label="Honey" bgColorValue="#cfa880" active />
          </ProductColorsContainer>
        </ProductColors>

        <ProductControls>
          <Button type="button" label="Select a size" secondary />
          <Button type="button" label="Find in store" />
          <ButtonText type="button" label="Need size help?" />
        </ProductControls>
      </ProductDetails>
    );
  }
}

export default Details;
