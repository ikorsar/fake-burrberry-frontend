import React, {Component} from 'react';

import Gallery from './components/Gallery/Gallery';
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Accordion from "./components/Accordion/Accordion";
import ProductCardRecommended from "./components/ProductCardRecommended/ProductCardRecommended";

class App extends Component {
  render() {
    return (
      <section className="page-content" role="main">
        <div className="container">
          <h1 className="product-title">Long Cotton Gabardine Car Coat</h1>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-7">
              <Gallery/>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-5">
              <ProductDetails/>
            </div>
          </div>
        </div>
        <Accordion/>
        <div className="container">
          <section className="product-section product-section-recommend">
            <h2 className="product-section-title">We recommend</h2>
            <div className="row">
              <ProductCardRecommended/>
            </div>
          </section>
          <section className="product-section product-section-more">
            <h2 className="product-section-title">More for you</h2>
            <div className="help-links">
              <a className="help-links-link" href="#" title="Men’s Black Trench Coats">Men’s Black Trench Coats</a>
              <a className="help-links-link" href="#" title="Men’s Short Trench Coats">Men’s Short Trench Coats</a>
              <a className="help-links-link" href="#" title="Men’s Long Trench Coats">Men’s Long Trench Coats</a>
            </div>
          </section>
        </div>
      </section>
    );
  }
}

export default App;
