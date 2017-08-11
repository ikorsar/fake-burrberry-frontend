import React from 'react';

import { Recommends } from '../styled';

import Title from '../../components/Titles/Title';
import Link from './Link';

const More = Recommends.extend`
  padding-top: 1rem;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

export default () =>
  (<More>
    <Title>More for you</Title>
    <Link href="#" title="Men’s Black Trench Coats" />
    <Link href="#" title="Men’s Short Trench Coats" />
    <Link href="#" title="Men’s Long Trench Coats" />
  </More>);
