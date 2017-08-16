import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Categories from '../Categories';
import CategoryHeader from './CategoryHeader';
import SubCategory from './SubCategory';
import ShowMore from './ShowMore';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Men’s Clothing</title>
        </Helmet>

        <Categories />
        <CategoryHeader />

        <div className="container">
          <SubCategory />

          <ShowMore />
        </div>
      </div>
    );
  }
}

export default List;
