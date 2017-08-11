import React from 'react';
import styled from 'styled-components';

const ImgBig = styled.img`
  display: block;
  width: 100%;
`;

export default props => <ImgBig src={`/files/${props.photoName}.jpg`} alt={props.alt} />;
