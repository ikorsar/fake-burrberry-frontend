import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  font-size: .75rem;
  font-weight: bold;
  line-height: .875rem;
  margin: 0 0 1rem;
  text-transform: uppercase;
`;

export default props => (
  <Title>{props.title}</Title>
)