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

const Photo = styled.img`
  flex-shrink: 0;
  width: auto;
  height: 400px;
  display: block;

  @media screen and (min-width: 48rem) {
    height: 576px;
  }

  @media screen and (min-width: 62rem) {
    height: 650px;
  }
`;

export default () =>
  (<Gallery>
    <Photo src="/files/product-img1.jpg" alt="Long Cotton Gabardine Car Coat" />
    <Photo src="/files/product-img3.jpg" alt="Long Cotton Gabardine Car Coat" />
    <Photo src="/files/product-img2.jpg" alt="Long Cotton Gabardine Car Coat" />
    <Photo src="/files/product-img4.jpg" alt="Long Cotton Gabardine Car Coat" />
  </Gallery>);
