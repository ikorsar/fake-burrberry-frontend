import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

const PageHeader = styled.header`
  padding: 1rem 0;
  border-bottom: 1px solid #c6c6c6;

  @media screen and (min-width: 48rem) {
    padding: 1.5rem;
  }
`;

const PageHeaderlLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageHeaderLogo = styled.img`
  width: 138px;
  height: 10px;
`;

export default () =>
  (<PageHeader>
    <PageHeaderlLink href="/">
      <PageHeaderLogo src={logo} alt="Burberry Logo" />
    </PageHeaderlLink>
  </PageHeader>);
