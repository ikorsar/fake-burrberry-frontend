import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

import { Title } from './styled';
import Gallery from './Gallery';
import Details from './Details';

const Info = styled.section`
  @media screen and (min-width: 62rem) {
    background-color: ${props => props.color};
  }
`;

export default props =>
  (<Info color={props.color}>
    <div className="container">
      <MediaQuery maxWidth={991}>
        <Title>Long Cotton Gabardine Car Coat</Title>
      </MediaQuery>
      <div className="row middle-lg">
        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-6">
          <Gallery />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6">
          <Details />
        </div>
      </div>
    </div>
  </Info>);
