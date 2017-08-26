import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { addLocaleData, IntlProvider } from 'react-intl';
import ru from 'react-intl/locale-data/ru';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import List from './Product/List';
import Show from './Product/Show';

import Header from './Header';
import Footer from './Footer';

addLocaleData(ru);

const Content = styled.div`
  overflow: hidden;
  padding-bottom: 4rem;

  @media screen and (min-width: 48rem) {
    padding-bottom: 3.5rem;
  }
`;

export default () =>
  (<IntlProvider locale="ru">
    <div>
      <Helmet defaultTitle="Burberry" titleTemplate="%s | Burberry" />
      <Router>
        <div>
          <Header />
          <Content role="main">
            <Switch>
              <Route exact path="/products/:section/" component={List} />
              <Route exact path="/products/:section/:category" component={List} />
              <Route path="/products/:section/:category/:id" component={Show} />
              <Redirect from="/" to="/products/men/" />
            </Switch>
          </Content>
          <Footer />
        </div>
      </Router>
    </div>
  </IntlProvider>);
