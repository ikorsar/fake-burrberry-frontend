import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import MediaQuery from 'react-responsive';

import Categories from '../Categories';
import Description from './Description';
import Shipping from './Shipping';
import Delivery from './Delivery';
import Recommend from './Recommended';
import More from './More';
import Info from './Info';

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Long Cotton Gabardine Car Coat</title>
        </Helmet>

        <Categories />

        <Info color="#d4bdad" />

        <Description />

        <Shipping />

        <MediaQuery minWidth={768}>
          <Delivery />
        </MediaQuery>

        <div className="container">
          <Recommend />
          <More />
        </div>
      </div>
    );
  }
}

export default Show;
