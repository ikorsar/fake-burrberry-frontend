import React from 'react';
import { Helmet } from 'react-helmet';

import { Desktop, Tablet, Mobile } from '../components/Breakpoints';

import TitleBorder from '../components/Titles/TitleBorder';
import Title from './Title';
import Gallery from './Gallery';
import Details from './Details';
import Description from './Description';
import Delivery from './Delivery';
import Shipping from './Shipping';
import Recommended from './Recommended';
import More from './More';

import { Recommends } from './styled';

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
      <Delivery />
    </Mobile>

    <Tablet>
      <Shipping />
    </Tablet>

    <div className="container">
      <Recommends>
        <TitleBorder label="We recommend" />
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <Recommended
              title="Emroided Hooded Content For Three Lines"
              photoName="recommend1"
              price={27000}
              currency="RUB"
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Recommended
              title="Relaxed Fit Stretch Jeans"
              photoName="recommend2"
              price={22500}
              currency="RUB"
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Recommended
              title="Leather and House Check"
              photoName="recommend3"
              price={120000}
              currency="RUB"
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Recommended
              title="Leather Wingtip Check"
              photoName="recommend4"
              price={46000}
              currency="RUB"
            />
          </div>
        </div>
      </Recommends>

      <More />
    </div>
  </div>);
