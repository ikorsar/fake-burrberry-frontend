import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import PageHeader from './components/Header/';
import Product from './Product/';
import PageFooter from './components/Footer/';

const PageContent = styled.div`
  padding-bottom: 4rem;

  @media screen and (min-width: 48rem) {
    padding-bottom: 3.5rem;
  }
`;

export default () =>
  (<div>
    <Helmet defaultTitle="Burberry" titleTemplate="%s | Burberry" />
    <PageHeader />
    <PageContent role="main">
      <Product />
    </PageContent>
    <PageFooter />
  </div>);
