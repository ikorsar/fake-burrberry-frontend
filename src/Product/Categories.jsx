import React from 'react';
import styled from 'styled-components';

const Categories = styled.section`
  display: none;

  @media screen and (min-width: 48rem) {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
`;

const Link = styled.a`
  font-size: 12px;
  line-height: 1.33;
  font-weight: 600;
  text-transform: uppercase;
  color: ${props => (props.active ? '#171717' : '#999')};
  text-decoration: none;
  letter-spacing: 1.5px;
  padding: 0 1rem 1rem;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${props => (props.active ? '#171717' : 'transparent')};
`;

export default () =>
  (<Categories>
    <Link href="#">Women</Link>
    <Link href="#" active>
      Men
    </Link>
    <Link href="#">Children</Link>
    <Link href="#">Beauty</Link>
    <Link href="#">Experience</Link>
  </Categories>);
