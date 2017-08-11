import React from 'react';
import { Helmet } from 'react-helmet';

import { TabletAndMore } from '../components/Breakpoints';

import Description from './Description';
import Shipping from './Shipping';
import Delivery from './Delivery';
import Recommend from './Recommended';
import More from './More';

import Info from './Info';

export default () =>
  (<div>
    <Helmet>
      <title>Long Cotton Gabardine Car Coat</title>
    </Helmet>

    <Info color="#d4bdad" />

    <Description />

    <Shipping />

    <TabletAndMore>
      <Delivery />
    </TabletAndMore>

    <div className="container">
      <Recommend />

      <More />
    </div>
  </div>);
