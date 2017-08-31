import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled, { css } from 'styled-components';

import { addLocaleData, IntlProvider } from 'react-intl';
import ru from 'react-intl/locale-data/ru';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import MobileMenu from './MobileMenu';
import List from './Product/List';
import Show from './Product/Show';

import Header from './Header';
import Footer from './Footer';

addLocaleData(ru);

const Page = styled.div`overflow: ${props => (props.isOpened ? 'hidden' : 'visible')};`;

const Content = styled.div`
  transition: transform 0.2s ease-in-out;
  transform: translate3d(0, 0, 0);
  z-index: 200;
  position: relative;
  background-color: #fff;

  ${props =>
    props.isOpened &&
    css`
      transform: translate3d(274px, 0, 0);
      overflow: hidden;
      pointer-events: none;
      height: 100vh;
    `};

  @media screen and (min-width: 62rem) {
    transition: none;
    transform: translate3d(0, 0, 0);
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
            <Page isOpened={this.state.isOpened}>
              <div
                ref={(node) => {
                  this.node = node;
                }}
              >
                <MobileMenu isOpened={this.state.isOpened} />
              </div>
              <Content isOpened={this.state.isOpened}>
                <Header handleMenuOpen={this.handleClick} />
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
