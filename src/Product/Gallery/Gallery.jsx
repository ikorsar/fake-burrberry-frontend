import React from 'react';
import styled from 'styled-components';

const Gallery = styled.section`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 0 -.5rem;

  @media screen and (min-width: 48rem) {
    margin: 0;
  }
`;

const GalleryPhoto = styled.img`
  flex-shrink: 0;
  width: auto;
  height: 400px;

  @media screen and (min-width: 48rem) {
    height: 576px;
  }
`;

export default () =>
  (<Gallery>
    <GalleryPhoto src="/files/product-img1.jpg" alt="Product photo 1" />
    <GalleryPhoto src="/files/product-img3.jpg" alt="Product photo 3" />
    <GalleryPhoto src="/files/product-img2.jpg" alt="Product photo 2" />
    <GalleryPhoto src="/files/product-img4.jpg" alt="Product photo 4" />
  </Gallery>);
