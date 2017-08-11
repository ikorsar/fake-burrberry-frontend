import React from 'react';
import { Helmet } from 'react-helmet';

import { Mobile, TabletAndMore } from '../components/Breakpoints';

import Title from './Title';
import Gallery from './Gallery';
import Details from './Details';
import Description from './Description';
import Shipping from './Shipping';
import Delivery from './Delivery';
import Recommend from './Recommended';
import More from './More';

export default () =>
  (<div>
    <Helmet>
      <title>Long Cotton Gabardine Car Coat</title>
    </Helmet>

    <div className="container">
      <Title>Long Cotton Gabardine Car Coat</Title>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-7">
          <Gallery />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5">
          <Details />
        </div>
      </div>
    </div>

    <Description />

    <Mobile>
      <Shipping />
    </Mobile>

    <TabletAndMore>
      <Delivery />
    </TabletAndMore>

    <div className="container">

      <Recommend/>
      
      <More />

    </div>
  </div>);
