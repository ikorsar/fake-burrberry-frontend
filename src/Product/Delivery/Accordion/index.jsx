import React from 'react';

import Accordion, { Container, Buttons, Button, Content } from '../../../components/Accordion';

const DeliveryContainer = Container.extend`
  border-bottom: 1px solid #c6c6c6;

  @media screen and (min-width: 48rem) {
    margin-bottom: .5rem;
    padding-top: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const DeliveryButtons = Buttons.extend`@media screen and (min-width: 48rem) {display: none;}`;

class AccordionDelivery extends Accordion {
  render() {
    return (
      <DeliveryContainer active={this.state.active}>
        <div className="container">
          <DeliveryButtons>
            <Button type="button" active={this.state.active} onClick={this.handleClick}>
              {this.props.title}
            </Button>
          </DeliveryButtons>
        </div>
        <Content active={this.state.active}>
          {this.props.children}
        </Content>
      </DeliveryContainer>
    );
  }
}

export default AccordionDelivery;
