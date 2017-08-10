import React from 'react';
import styled from 'styled-components';

const GalleryPhoto = styled.img`
  flex-shrink: 0;
  width: auto;
  height: 400px;

  @media screen and (min-width: 48rem) {
    height: 576px;
  }
`;

export default props => <GalleryPhoto src={`/files/${props.photoName}.jpg`} alt={props.alt} />;
