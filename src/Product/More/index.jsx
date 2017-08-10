import React from 'react';
import styled from 'styled-components';

import { Recommends } from '../styled';

import TitleBorder from '../../components/Titles/TitleBorder';
import Link from './Link';

const More = Recommends.extend`
  padding-top: 1rem;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

export default () =>
  (<More>
    <TitleBorder label="More for you" />
    <Link href="#" title="Men’s Black Trench Coats" />
    <Link href="#" title="Men’s Short Trench Coats" />
    <Link href="#" title="Men’s Long Trench Coats" />
  </More>);
