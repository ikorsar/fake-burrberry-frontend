import React from 'react';
import styled from 'styled-components';

import Card from '../Card/index';
import { TitleSection } from './styled';

const Recommend = styled.section`
  padding: 3rem 0 0;

  @media screen and (min-width: 48rem) {
    padding: 0;
  }
`;

const Title = TitleSection.extend`
  @media screen and (min-width: 62rem) {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export default () =>
  (<Recommend>
    <Title>We recommend</Title>
    <div className="row">
      <div className="col-xs-6 col-md-3">
        <Card
          link="/products/product1"
          title="Lightweight Crew Neck Cashmere Sweater with Check Trim"
          photoName="https://assets.burberry.com/is/image/Burberryltd/f51a470fc157e3014a115c64276c2e124d9fc477.jpg?$BBY_V2_ML_3X4$&hei=260&wid=195"
          price={27000}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          link="/products/product1"
          title="Relaxed Fit Stretch Jeans"
          photoName="https://assets.burberry.com/is/image/Burberryltd/eb872d02449c4050916c9eaf44e266bfdbd32304.jpg?$BBY_V2_ML_3X4$&hei=260&wid=195"
          price={22500}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          link="/products/product1"
          title="Leather and House Check"
          photoName="https://assets.burberry.com/is/image/Burberryltd/cfaeb1b3c79aeee09dfda4e26a9fb3f4525df542.jpg?$BBY_V2_SL_3X4$&hei=260&wid=195"
          price={120000}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          link="/products/product1"
          title="Leather Wingtip Check"
          photoName="https://assets.burberry.com/is/image/Burberryltd/b33127f06e6c404cc3168645e099a9eb71aeca9c.jpg?$BBY_V2_SL_3X4$&hei=260&wid=195"
          price={46000}
          currency="RUB"
        />
      </div>
    </div>
  </Recommend>);
