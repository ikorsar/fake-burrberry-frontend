import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import List from './Product/List';
import Show from './Product/Show';

import Header from './Header';
import Footer from './Footer';

addLocaleData([...en, ...ru]);

const Content = styled.div`
  padding-bottom: 4rem;

  @media screen and (min-width: 48rem) {
    padding-bottom: 3.5rem;
  }
`;

export default () =>
  (<Router>
    <IntlProvider locale={navigator.language}>
      <div>
        <Helmet defaultTitle="Burberry" titleTemplate="%s | Burberry" />
        <Header />
        <Content role="main">
          <Route exact path="/products" component={List} />
          <Route path="/products/:id" component={Show} />
        </Content>
        <Footer />
      </div>
    </IntlProvider>
  </Router>);
