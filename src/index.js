import React from 'react';
import ReactDOM from 'react-dom';

import Header from "./components/Header/Header";
import App from './App';
import Footer from './components/Footer/Footer';

import 'normalize.css';
import './styles/flexboxgrid.css';
import './styles/styles.css';
import './styles/product-card.css';

ReactDOM.render(
  <div>
    <Header/>

    <App/>

    <Footer/>
  </div>,
  document.getElementById('root')
);
