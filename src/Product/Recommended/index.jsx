import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import { TitleSection } from '../styled';

const Recommend = styled.section`
  padding: 3rem .5rem 0;

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
          title="Lightweight Crew Neck Cashmere Sweater with Check Trim"
          photoName="recommend1"
          price={27000}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          title="Relaxed Fit Stretch Jeans"
          photoName="recommend2"
          price={22500}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          title="Leather and House Check"
          photoName="recommend3"
          price={120000}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card title="Leather Wingtip Check" photoName="recommend4" price={46000} currency="RUB" />
      </div>
    </div>
  </Recommend>);
