import React from 'react';
import { Recommends, TitleSection } from '../styled';
import Link from './Link';

const More = Recommends.extend`
  padding-top: 1rem;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

export default () =>
  (<More>
    <TitleSection>More for you</TitleSection>
    <Link href="#" title="Men’s Black Trench Coats" />
    <Link href="#" title="Men’s Short Trench Coats" />
    <Link href="#" title="Men’s Long Trench Coats" />
  </More>);
