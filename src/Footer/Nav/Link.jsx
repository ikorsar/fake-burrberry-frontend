import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  font-size: .75rem;
  font-weight: 600;
  line-height: 1rem;
  display: block;
  margin-bottom: .75rem;
  text-decoration: none;
  color: #999;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default props =>
  (<Link href="#" title={props.children}>
    {props.children}
  </Link>);
