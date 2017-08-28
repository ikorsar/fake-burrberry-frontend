import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { addLocaleData, IntlProvider } from 'react-intl';
import ru from 'react-intl/locale-data/ru';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import MobileMenu from './MobileMenu';
import List from './Product/List';
import Show from './Product/Show';

import Header from './Header';
import Footer from './Footer';

addLocaleData(ru);

const Page = styled.div`
  &.menu-opened {
    overflow: hidden;
  }
`;

const Content = styled.div`
  transition: all .2s ease-in-out;
  transform: translateX(0);

  .menu-opened & {
    transform: translateX(274px);
  }
`;

const Main = styled.div`
  overflow: hidden;
  padding-bottom: 4rem;

  @media screen and (min-width: 48rem) {
    padding-bottom: 3.5rem;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.menuClose = this.menuClose.bind(this);
  }

  state = {
    isOpened: false,
  };

  componentDidMount() {
    document.addEventListener('click', this.menuClose, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.menuClose, true);
  }

  handleClick() {
    this.setState({
      isOpened: true,
    });
  }

  menuClose(e) {
    if (this.node && !this.node.contains(e.target)) {
      this.setState({
        isOpened: false,
      });
    }
  }

  render() {
    return (
      <IntlProvider locale="ru">
        <div>
          <Helmet defaultTitle="Burberry" titleTemplate="%s | Burberry" />
          <Router>
            <Page className={this.state.isOpened ? 'menu-opened' : null}>
              <div
                ref={(node) => {
                  this.node = node;
                }}
              >
                <MobileMenu />
              </div>
              <Content>
                <Header menuOpen={this.handleClick} />
                <Main role="main">
                  <Switch>
                    <Route exact path="/products/:section/" component={List} />
                    <Route exact path="/products/:section/:category" component={List} />
                    <Route path="/products/:section/:category/:id" component={Show} />
                    <Redirect from="/" to="/products/men/" />
                  </Switch>
                </Main>
                <Footer />
              </Content>
            </Page>
          </Router>
        </div>
      </IntlProvider>
    );
  }
}

export default App;
