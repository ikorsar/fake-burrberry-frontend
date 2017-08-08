import React, {Component} from 'react';

class Gallery extends Component {
  render() {
    return (
      <section className="product-gallery">
        <img className="product-gallery-photo" src="/files/product-img1.jpg" alt="Product photo 1"/>
        <img className="product-gallery-photo" src="/files/product-img3.jpg" alt="Product photo 3"/>
        <img className="product-gallery-photo" src="/files/product-img2.jpg" alt="Product photo 2"/>
        <img className="product-gallery-photo" src="/files/product-img4.jpg" alt="Product photo 4"/>
      </section>
    );
  }
}

export default Gallery;
