import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Categories from '../Categories';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Trench Coats for Men</title>
        </Helmet>

        <Categories />
      </div>
    );
  }
}

export default List;
