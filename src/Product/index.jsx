import React from 'react';
import { Helmet } from 'react-helmet';
import Responsive from 'react-responsive';

import Description from './Description';
import Shipping from './Shipping';
import Delivery from './Delivery';
import Recommend from './Recommended';
import More from './More';
import Info from './Info';

const MediaQuery = require('react-responsive');

export default () =>
  (<div>
    <Helmet>
      <title>Long Cotton Gabardine Car Coat</title>
    </Helmet>

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
  </div>);
