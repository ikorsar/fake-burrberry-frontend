import React from 'react';
import styled from 'styled-components';
import { Recommends, TitleSection } from './styled';

const More = Recommends.extend`
  padding-top: 1rem;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const Link = styled.a`
  font-family: "Lora", Helvetica, Arial, serif;
  font-size: .875rem;
  font-style: italic;
  line-height: 17px;
  display: block;
  margin-bottom: 1rem;
  text-decoration: none;
  color: #171717;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default () =>
  (<More>
    <TitleSection>More for you</TitleSection>
    <Link href="#" title="Men’s Black Trench Coats">Men’s Black Trench Coats</Link>
    <Link href="#" title="Men’s Short Trench Coats">Men’s Short Trench Coats</Link>
    <Link href="#" title="Men’s Long Trench Coats">Men’s Long Trench Coats</Link>
  </More>);
