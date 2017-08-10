import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import TitleBorder from '../components/Titles/TitleBorder';

import Title from './Title';
import Gallery from './Gallery';
import Details from './Details';
import Description from './Description';
import Delivery from './Delivery';
import Recommended from './Recommended';
import More from './More';

import { Recommends } from './styled';

class Product extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Long Cotton Gabardine Car Coat</title>
        </Helmet>

        <div className="container">
          <Title label="Long Cotton Gabardine Car Coat" />
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

        <Delivery />

        <div className="container">
          <Recommends>
            <TitleBorder label="We recommend" />
            <div className="row">
              <div className="col-xs-6 col-md-3">
                <Recommended
                  title="Emroided Hooded Content For Three Lines"
                  photoName="recommend1"
                  price="27 000"
                  currency="руб"
                />
              </div>
              <div className="col-xs-6 col-md-3">
                <Recommended
                  title="Relaxed Fit Stretch Jeans"
                  photoName="recommend2"
                  price="22 500"
                  currency="руб"
                />
              </div>
              <div className="col-xs-6 col-md-3">
                <Recommended
                  title="Leather and House Check"
                  photoName="recommend3"
                  price="120 000"
                  currency="руб"
                />
              </div>
              <div className="col-xs-6 col-md-3">
                <Recommended
                  title="Leather Wingtip Check"
                  photoName="recommend4"
                  price="46 000"
                  currency="руб"
                />
              </div>
            </div>
          </Recommends>

          <More />
        </div>
      </div>
    );
  }
}

export default Product;
