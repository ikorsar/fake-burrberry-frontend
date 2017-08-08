import React, {Component} from 'react';
import ButtonColor from "../Button/ButtonColor";

class ProductDetails extends Component {
  render() {
    return (
      <article className="product-details">
        <section className="product-details-header">
          <h2 className="product-details-price">110 000 руб.</h2>
          <p className="product-details-partnumber">Item 39428531</p>
        </section>

        <section className="product-colors-container">
          <p className="product-colors-choosen">Colour: <span
            className="product-colors-choosen-name">Honey</span></p>
          <div className="product-colors">
            <ButtonColor label="Black color"/>
            <ButtonColor className="is-active" label="Honey color"/>
          </div>
        </section>

        <section className="product-controls">
          <button className="btn btn-black" type="button">Select a size</button>
          <button className="btn btn-white" type="button">Find in store</button>
          <button className="btn btn-text" type="button">Need size help?</button>
        </section>
      </article>
    );
  }
}

export default ProductDetails;