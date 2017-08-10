import React, { Component } from 'react';
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

class App extends Component {
  render() {
    return (
      <div>
        <Helmet defaultTitle="Burberry" titleTemplate="%s | Burberry">
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Raleway:400,500,600,700"
          />
        </Helmet>

        <PageHeader />
        <PageContent role="main">
          <Product />
        </PageContent>
        <PageFooter />
      </div>
    );
  }
}

export default App;
