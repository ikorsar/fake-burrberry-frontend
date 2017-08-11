import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

import Header from './components/Header/';
import Product from './Product/';
import Footer from './components/Footer/';

addLocaleData([...en, ...ru]);

const Content = styled.div`
  padding-bottom: 4rem;

  @media screen and (min-width: 48rem) {
    padding-bottom: 3.5rem;
  }
`;

export default () =>
  (<IntlProvider locale={navigator.language}>
    <div>
      <Helmet defaultTitle="Burberry" titleTemplate="%s | Burberry" />
      <Header />
      <Content role="main">
        <Product />
      </Content>
      <Footer />
    </div>
  </IntlProvider>);
