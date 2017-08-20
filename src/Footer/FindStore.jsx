import React from 'react';
import styled from 'styled-components';

const FindStore = styled.div`
  display: none;

  @media screen and (min-width: 62rem) {
    display: block;
  }
`;

const Img = styled.img`
  display: block;
  margin-bottom: 1rem;
`;

const Link = styled.a`
  font-size: .75rem;
  line-height: 1.33;
  font-weight: 600;
  color: #171717;
  text-decoration: none;
  border-bottom: 1px solid #171717;
`;

export default () =>
  (<FindStore>
    <Img src="https://assets.burberry.com/is/image/Burberryltd/933f04c94a361dfd816c77528ec0e7286921051b.jpg" />
    <Link href="#">Find a store</Link>
  </FindStore>);
