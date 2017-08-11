import React from 'react';
import styled from 'styled-components';

import Title from '../Title';
import Gallery from '../Gallery';
import Details from '../Details';

import { DesktopLess } from '../../components/Breakpoints';

const Info = styled.section`
  @media screen and (min-width: 62rem) {
    background-color: ${props => props.color};
  }
`;

export default props =>
  (<Info color={props.color}>
    <div className="container">
      <DesktopLess>
        <Title>Long Cotton Gabardine Car Coat</Title>
      </DesktopLess>
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
