import React from 'react';
import styled from 'styled-components';

import GalleryPhoto from './GalleryPhoto';

const Gallery = styled.section`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 0 -.5rem;

  @media screen and (min-width: 48rem) {
    margin: 0;
  }
`;

export default () =>
  (<Gallery>
    <GalleryPhoto photoName="product-img1" alt="Long Cotton Gabardine Car Coat" />
    <GalleryPhoto photoName="product-img3" alt="Long Cotton Gabardine Car Coat" />
    <GalleryPhoto photoName="product-img2" alt="Long Cotton Gabardine Car Coat" />
    <GalleryPhoto photoName="product-img4" alt="Long Cotton Gabardine Car Coat" />
  </Gallery>);
