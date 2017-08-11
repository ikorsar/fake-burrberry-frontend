import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const Recommend = styled.section`
  padding: 3rem .5rem 0;
  
  @media screen and (min-width: 48rem) {
    padding: 0;
  }
`;

const Title = styled.h2`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.1875rem;
  position: relative;
  display: inline-block;
  margin: 0 0 1.5rem;
  padding-bottom: .5rem;
  text-transform: uppercase;
  color: #171717;
  border-bottom: 1px solid #171717;

  @media screen and (min-width: 48rem) {
    line-height: 19px;
    margin: 0 0 1rem;
  }
  
  @media screen and (min-width: 62rem) {
    border-bottom-color: transparent;
    text-align: center;  
    display: block;
  }
`;

export default () => (
  <Recommend>
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
        <Card
          title="Leather Wingtip Check"
          photoName="recommend4"
          price={46000}
          currency="RUB"
        />
      </div>
    </div>
  </Recommend>
)