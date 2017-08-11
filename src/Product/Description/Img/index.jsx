import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  display: block;
  width: 100%;
  margin-top: ${props => props.margin}rem;
`;

export default props =>
  <Img src={`/files/${props.photoName}.jpg`} alt={props.alt} margin={props.margin} />;
