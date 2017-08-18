import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Filters from './Filters';

const CategoryHeader = styled.section`
  background-color: #f3f3f3;
  padding-top: 2rem;

  @media screen and (min-width: 48rem) {
    padding-top: 4rem;
  }
`;

const Title = styled.h1`
  font-family: "Lora", Helvetica, Arial, serif;
  font-size: 1.625rem;
  line-height: 2rem;
  font-weight: 400;
  margin: 0 0 1rem;
`;

const Description = styled.article`
  margin-bottom: .5rem;

  p {
    font-size: .75rem;
    line-height: 1.67;
    color: #171717;
    opacity: .87;
    margin: 0;
  }

  @media screen and (min-width: 48rem) {
    margin-bottom: 1rem;
  }
`;

const LinkStyled = styled(Link)`
  color: #171717;
  text-decoration: none;
  border-bottom: 1px solid #171717;
`;

const Button = styled.button`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: .875rem;
  font-weight: 500;
  border: 0;
  border-bottom: 1px solid #171717;
  display: inline-block;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  margin-left: .5rem;
`;

export default () =>
  (<CategoryHeader>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-9">
          <Title>Men’s Clothing</Title>
          <Description>
            <p>
              Explore our menswear collection for the season. Sculptural knitwear,{' '}
              <LinkStyled to="/sweatshirts">sweatshirts</LinkStyled>, artist overalls and oversized
              cabans feature alongside our signature trench coat in both heritage and
              seasonal&hellip;
              <Button>More</Button>
            </p>
          </Description>
        </div>
      </div>
      <Filters />
    </div>
  </CategoryHeader>);
