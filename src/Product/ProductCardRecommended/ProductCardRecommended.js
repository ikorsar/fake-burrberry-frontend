import React from "react";
import styled from "styled-components";

const ProductCardRecommended = styled.a`
  display: block;
  margin-bottom: 2rem;
  text-decoration: none;
  color: #171717;

  @media screen and (min-width: 48rem) {
    margin-bottom: .5rem;
  }
`;

const ProductCardRecommendedPhoto = styled.img`
  display: block;
  width: 100%;
`;

const ProductCardRecommendedName = styled.h3`
  font-family: "Lora", Helvetica, Arial, serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.19;
  margin: .5rem 0;
  padding: 0;
`;

const ProductCardRecommendedPrice = styled.h4`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  font-weight: 400;
  line-height: 1.17;
  margin: 0;
  color: #999;
`;

export default () => (
  <div className="col-xs-6 col-md-3">
    <ProductCardRecommended href="#" title="Emroided Hooded">
      <ProductCardRecommendedPhoto src="/files/recommend1.jpg" alt="Emroided Hooded"/>
      <ProductCardRecommendedName>Emroided Hooded Content For Three Lines</ProductCardRecommendedName>
      <ProductCardRecommendedPrice>27 000 руб</ProductCardRecommendedPrice>
    </ProductCardRecommended>
  </div>
);