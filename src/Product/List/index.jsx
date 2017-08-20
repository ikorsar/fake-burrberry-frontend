import React from 'react';
import { Helmet } from 'react-helmet';

import Categories from '../Categories';
import CategoryHeader from './CategoryHeader';
import SubCategory from './SubCategory';
import ShowMore from './ShowMore';

export default () =>
  (<div>
    <Helmet>
      <title>Men’s Clothing</title>
    </Helmet>

    <Categories />
    <CategoryHeader />

    <div className="container">
      <SubCategory />

      <ShowMore />
    </div>
  </div>);
