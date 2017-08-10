import React, { Component } from 'react';

import Button from '../../components/Buttons/Button';
import ButtonText from '../../components/Buttons/ButtonText';
import ButtonColor from '../ButtonColor';

import {
  Product,
  ProductHeader,
  ProductPrice,
  ProductPartNumber,
  ProductControls,
  ProductColors,
  ProductColorsChoosen,
  ProductColorsContainer
} from './styled';

class Details extends Component {
  render() {
    return (
      <Product>
        <ProductHeader>
          <ProductPrice>110 000 руб.</ProductPrice>
          <ProductPartNumber>Item 39428531</ProductPartNumber>
        </ProductHeader>

        <ProductColors>
          <ProductColorsChoosen>Color: Honey</ProductColorsChoosen>
          <ProductColorsContainer>
            <ButtonColor label="Black" bgColorValue="#232122" />
            <ButtonColor label="Honey" bgColorValue="#cfa880" active />
          </ProductColorsContainer>
        </ProductColors>

        <ProductControls>
          <Button label="Select a size" secondary />
          <Button label="Find in store" />
          <ButtonText label="Need size help?" />
        </ProductControls>
      </Product>
    );
  }
}

export default Details;
