import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import TitleBorder from '../components/Titles/TitleBorder';

import Title from './Title';
import Gallery from './Gallery/Gallery';
import Details from './Details/Details';
import Description from './Description/Description';
import Delivery from './Delivery/Delivery';
import Recommended from './Recommended/Recommended';

import { Recommends, More, MoreLink } from './styled';

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
                <Recommended />
              </div>
              <div className="col-xs-6 col-md-3">
                <Recommended />
              </div>
              <div className="col-xs-6 col-md-3">
                <Recommended />
              </div>
              <div className="col-xs-6 col-md-3">
                <Recommended />
              </div>
            </div>
          </Recommends>

          <More>
            <TitleBorder label="More for you" />
            <MoreLink href="#" title="Men’s Black Trench Coats">
              Men’s Black Trench Coats
            </MoreLink>
            <MoreLink href="#" title="Men’s Short Trench Coats">
              Men’s Short Trench Coats
            </MoreLink>
            <MoreLink href="#" title="Men’s Long Trench Coats">
              Men’s Long Trench Coats
            </MoreLink>
          </More>
        </div>
      </div>
    );
  }
}

export default Product;
