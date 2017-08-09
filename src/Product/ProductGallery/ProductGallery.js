import React from "react";
import styled from "styled-components";

const ProductGallery = styled.section`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 0 -.5rem;

  @media screen and (min-width: 48rem) {
    margin: 0;
  }
`;

const ProductGalleryPhoto = styled.img`
  flex-shrink: 0;
  width: auto;
  height: 400px;

  @media screen and (min-width: 48rem) {
    height: 576px;
  }
`;

export default () => (
  <ProductGallery>
    <ProductGalleryPhoto src="/files/product-img1.jpg" alt="Product photo 1"/>
    <ProductGalleryPhoto src="/files/product-img3.jpg" alt="Product photo 3"/>
    <ProductGalleryPhoto src="/files/product-img2.jpg" alt="Product photo 2"/>
    <ProductGalleryPhoto src="/files/product-img4.jpg" alt="Product photo 4"/>
  </ProductGallery>
);