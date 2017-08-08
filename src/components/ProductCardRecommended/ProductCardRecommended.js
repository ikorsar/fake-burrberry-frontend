import React, {Component} from 'react';

class ProductCardRecommended extends Component {
  render() {
    return (
      <div className="col-xs-6 col-md-3">
        <a className="product-recommendation-card" href="#" title="Emroided Hooded">
          <img className="product-recommendation-card-photo" src="/files/recommend1.jpg" alt="Emroided Hooded"/>
          <h3 className="product-recommendation-card-name">Emroided Hooded Content For Three Lines</h3>
          <h4 className="product-recommendation-card-price">27 000 руб</h4>
        </a>
      </div>
    )
  }
}

export default ProductCardRecommended;