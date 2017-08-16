import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SmallOnly } from '../components/Breakpoints';

import { Title } from './styled';
import Gallery from './Gallery';
import Details from './Details';

const Info = styled.section`
  @media screen and (min-width: 62rem) {
    background-color: ${props => props.color};
  }
`;

export default function InfoComponent(props) {
  return (
    <Info color={props.color}>
      <div className="container">
        <SmallOnly>
          <Title>Long Cotton Gabardine Car Coat</Title>
        </SmallOnly>
        <div className="row middle-lg">
          <div className="col-xs-12 col-sm-12 col-md-7 col-lg-6">
            <Gallery />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6">
            <Details />
          </div>
        </div>
      </div>
    </Info>
  );
}

InfoComponent.propTypes = {
  color: PropTypes.string.isRequired,
};
