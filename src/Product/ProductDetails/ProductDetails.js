import React, {Component} from "react";

import ButtonColor from "../../components/Buttons/ButtonColor";
import Button from "../../components/Buttons/Button";
import ButtonText from "../../components/Buttons/ButtonText";

import {Product, ProductHeader, ProductPrice, ProductPartNumber, ProductControls, ProductColors, ProductColorsChoosen, ProductColorsContainer} from "./styled";

class ProductDetails extends Component {
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
            <ButtonColor label="Black color"/>
            <ButtonColor label="Honey color" isActive/>
          </ProductColorsContainer>
        </ProductColors>

        <ProductControls>
          <Button label="Select a size" secondary/>
          <Button label="Find in store"/>
          <ButtonText label="Need size help?"/>
        </ProductControls>
      </Product>
    );
  }
}

export default ProductDetails;