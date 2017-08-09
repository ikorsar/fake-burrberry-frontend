import React, {Component} from "react";

import Accordion from "../components/Accordion/Accordion";
import TitleBorder from "../components/Titles/TitleBorder";

import ProductTitle from "./ProductTitle";
import ProductGallery from "./ProductGallery/ProductGallery";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductDelivery from "./ProductDelivery/ProductDelivery";
import ProductCardRecommended from "./ProductCardRecommended/ProductCardRecommended";

import {ProductRecommends, ProductMore, ProductMoreLink} from "./styled";

class Product extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <ProductTitle label="Long Cotton Gabardine Car Coat"/>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-7">
              <ProductGallery/>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-5">
              <ProductDetails/>
            </div>
          </div>
        </div>
        
        <ProductDescription/>

        <ProductDelivery/>

        <div className="container">
          <ProductRecommends>
            <TitleBorder label="We recommend"/>
            <div className="row">
              <ProductCardRecommended/>
              <ProductCardRecommended/>
              <ProductCardRecommended/>
              <ProductCardRecommended/>
            </div>
          </ProductRecommends>
          <ProductMore>
            <TitleBorder label="More for you"/>
            <ProductMoreLink href="#" title="Men’s Black Trench Coats">Men’s Black Trench Coats</ProductMoreLink>
            <ProductMoreLink href="#" title="Men’s Short Trench Coats">Men’s Short Trench Coats</ProductMoreLink>
            <ProductMoreLink href="#" title="Men’s Long Trench Coats">Men’s Long Trench Coats</ProductMoreLink>
          </ProductMore>
        </div>
      </div>
    );
  }
}

export default Product;
