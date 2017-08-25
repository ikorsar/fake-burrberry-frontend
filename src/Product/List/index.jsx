import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Categories from '../Categories';
import CategoryHeader from './CategoryHeader';
import SubCategory from './SubCategory';
import ShowMore from './ShowMore';

const ListContent = styled.section`
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .3);
    z-index: -10;
    opacity: 0;
    transition: all .15s ease-in-out;
  }

  &.is-opened::before {
    opacity: 1;
    z-index: 10;
  }
`;

export default () =>
  (<div>
    <Helmet>
      <title>Men’s Clothing</title>
    </Helmet>

    <Categories />
    <CategoryHeader />

    <ListContent>
      <div className="container">
        <SubCategory />

        <ShowMore />
      </div>
    </ListContent>
  </div>);
