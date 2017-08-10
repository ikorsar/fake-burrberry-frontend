import React from 'react';
import styled from 'styled-components';

import Button from './Button'

const Buttons = styled.div`
  padding-right: .5rem;
  padding-left: .5rem;

  @media screen and (min-width: 48rem) {
    display: flex;
    padding-right: 0;
    padding-left: 0;
  }
`;

export default () =>
  (<Buttons>
    <Button type="button" label="Shipping country: Russian Federation"/>
    <Button type="button" label="Language: English"/>
  </Buttons>);
