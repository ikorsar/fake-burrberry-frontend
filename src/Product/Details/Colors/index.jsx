import React from 'react';
import styled from 'styled-components';

import ColorButton from './ColorButton';

const Colors = styled.section`
  margin: 0 .5rem 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #c6c6c6;

  @media screen and (min-width: 48rem) {
    margin: 0 0 2rem;
  }

  @media screen and (min-width: 62rem) {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 1.5rem;
    display: flex;
    flex-flow: column;
  }
`;

const ColorsContainer = styled.div`
  display: flex;

  @media screen and (min-width: 62rem) {
    padding-top: 1rem;
  }
`;

const ColorChoosen = styled.p`
  font-family: Raleway;
  font-size: .75rem;
  line-height: 1rem;
  color: #171717;
  padding: 0;
  text-align: left;
  margin: 0 0 1rem;

  @media screen and (min-width: 62rem) {
    margin-bottom: 0;
  }
`;

export default () =>
  (<Colors>
    <ColorChoosen>Colour: <strong>Honey</strong></ColorChoosen>
    <ColorsContainer>
      <ColorButton label="Black" color="#232122" />
      <ColorButton label="Honey" color="#cfa880" />
    </ColorsContainer>
  </Colors>);
