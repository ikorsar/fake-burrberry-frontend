import React, {Component} from "react";
import styled from "styled-components";

import {Accordion, AccordionButtons, AccordionButton, AccordionContent} from "../../components/Accordion/Accordion";

const ProductDeliveryDescription = styled.article`
`;

const ProductDeliveryDescriptionImg = styled.img`
  display: none;

  @media screen and (min-width: 48rem) {
    display: block;
    width: 100%;
  }
`;

const ProductDeliveryDescriptionTitle = styled.h4`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  font-weight: bold;
  line-height: .875rem;
  margin: 0 0 .25rem;
`;

const ProductDeliveryDescriptionText = styled.p`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  margin: 0 0 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ProductDeliveryAccordionButton = AccordionButton.extend`
  @media screen and (min-width: 48rem) {
    line-height: 1.25rem;
    padding: 0 0 1rem;
  }
`;

class ProductDelivery extends Component {
  render() {
    return (
      <Accordion>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <ProductDeliveryDescriptionImg src="/files/delivery.jpg" alt="Delivery box"/>
            </div>
            <div className="col-xs-12 col-md-5">
              <AccordionButtons>
                <ProductDeliveryAccordionButton type="button">Delivery</ProductDeliveryAccordionButton>
              </AccordionButtons>
              <AccordionContent>
                <ProductDeliveryDescription>
                  <ProductDeliveryDescriptionTitle>Free Next Day Delivery</ProductDeliveryDescriptionTitle>
                  <ProductDeliveryDescriptionText>Order before 7pm Monday to Thursday for delivery the next
                    day</ProductDeliveryDescriptionText>
                  <ProductDeliveryDescriptionTitle>Collect-in-Store</ProductDeliveryDescriptionTitle>
                  <ProductDeliveryDescriptionText>Order online today and pick up your items in store as early as
                    tomorrow</ProductDeliveryDescriptionText>
                  <ProductDeliveryDescriptionTitle>Free Returns</ProductDeliveryDescriptionTitle>
                  <ProductDeliveryDescriptionText>Enjoy free returns on your order</ProductDeliveryDescriptionText>
                  <ProductDeliveryDescriptionTitle>Free Gift Packaging</ProductDeliveryDescriptionTitle>
                  <ProductDeliveryDescriptionText>Discover our gift packaging, a gold lined box tied with a coloured
                    ribbon</ProductDeliveryDescriptionText>
                </ProductDeliveryDescription>
              </AccordionContent>
            </div>
          </div>
        </div>
      </Accordion>
    );
  }
}

export default ProductDelivery;