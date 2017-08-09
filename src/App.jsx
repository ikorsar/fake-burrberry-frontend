import React, { Component } from 'react';
import styled from 'styled-components';

import Product from './Product/Product';

const PageContent = styled.div`
  padding-bottom: 4rem;

  @media screen and (min-width: 48rem) {
    padding-bottom: 3.5rem;
  }
`;

class App extends Component {
  render() {
    return (
      <PageContent role="main">
        <Product />
      </PageContent>
    );
  }
}

export default App;
