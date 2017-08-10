import React, { Component } from 'react';
import styled from 'styled-components';

import {
  Accordion,
  AccordionButtons,
  AccordionButton,
  AccordionContent,
} from '../../components/Accordion/index';

const DeliveryDescription = styled.article``;

const DeliveryDescriptionImg = styled.img`
  display: none;

  @media screen and (min-width: 48rem) {
    display: block;
    width: 100%;
  }
`;

const DeliveryDescriptionTitle = styled.h4`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  font-weight: bold;
  line-height: .875rem;
  margin: 0 0 .25rem;
`;

const DeliveryDescriptionText = styled.p`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  margin: 0 0 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const DeliveryAccordionButton = AccordionButton.extend`
  @media screen and (min-width: 48rem) {
    line-height: 1.25rem;
    padding: 0 0 1rem;
  }
`;

class Delivery extends Component {
  render() {
    return (
      <Accordion>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <DeliveryDescriptionImg src="/files/delivery.jpg" alt="Delivery box" />
            </div>
            <div className="col-xs-12 col-md-5">
              <AccordionButtons>
                <DeliveryAccordionButton type="button">Delivery</DeliveryAccordionButton>
              </AccordionButtons>
              <AccordionContent>
                <DeliveryDescription>
                  <DeliveryDescriptionTitle>Free Next Day Delivery</DeliveryDescriptionTitle>
                  <DeliveryDescriptionText>
                    Order before 7pm Monday to Thursday for delivery the next day
                  </DeliveryDescriptionText>
                  <DeliveryDescriptionTitle>Collect-in-Store</DeliveryDescriptionTitle>
                  <DeliveryDescriptionText>
                    Order online today and pick up your items in store as early as tomorrow
                  </DeliveryDescriptionText>
                  <DeliveryDescriptionTitle>Free Returns</DeliveryDescriptionTitle>
                  <DeliveryDescriptionText>
                    Enjoy free returns on your order
                  </DeliveryDescriptionText>
                  <DeliveryDescriptionTitle>Free Gift Packaging</DeliveryDescriptionTitle>
                  <DeliveryDescriptionText>
                    Discover our gift packaging, a gold lined box tied with a coloured ribbon
                  </DeliveryDescriptionText>
                </DeliveryDescription>
              </AccordionContent>
            </div>
          </div>
        </div>
      </Accordion>
    );
  }
}

export default Delivery;
