import React from 'react';
import styled from 'styled-components';

import Filters from './Filters';

const CategoryHeader = styled.section`
  background-color: #f3f3f3;
  padding: 2rem 0 1.5rem;
`;
const Title = styled.h1`
  font-family: "Lora", Helvetica, Arial, serif;
  font-size: 1.625rem;
  line-height: 2rem;
  font-weight: 400;
  margin: 0 0 1rem;
`;
const Description = styled.article`
  margin-bottom: 2rem;

  p {
    font-size: .75rem;
    line-height: 1.67;
    color: #171717;
    opacity: .87;
    margin: 0;
  }
`;

export default () =>
  (<CategoryHeader>
    <div className="container">
      <Title>Men’s clothing</Title>
      <Description>
        <p>
          Explore our menswear collection for the season. Sculptural knitwear, sweatshirts, artist
          overalls and oversized cabans feature alongside our signature trench coat in both
          heritage.
        </p>
      </Description>
      <Filters />
    </div>
  </CategoryHeader>);
