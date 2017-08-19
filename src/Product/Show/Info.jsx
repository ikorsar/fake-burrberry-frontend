import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SmallOnly, LargeOnly } from '../../components/Breakpoints';

import { Title } from './styled';
import Gallery, { Photo } from './Gallery';
import Details from './Details';

const InfoStyled = styled.section`
  @media screen and (min-width: 62rem) {
    background-color: ${props => props.color};
  }
`;

export default function Info(props) {
  return (
    <InfoStyled color={props.color}>
      <div className="container">
        <SmallOnly>
          <Title>Long Cotton Gabardine Car Coat</Title>
        </SmallOnly>
        <div className="row middle-lg">
          <div className="col-xs-12 col-sm-12 col-md-7 col-lg-6">
            <LargeOnly>
              <Photo src="/files/product-img1.jpg" alt="Long Cotton Gabardine Car Coat" />
            </LargeOnly>
            <SmallOnly>
              <Gallery />
            </SmallOnly>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6">
            <Details />
          </div>
        </div>
      </div>
    </InfoStyled>
  );
}

Info.propTypes = {
  color: PropTypes.string.isRequired,
};
