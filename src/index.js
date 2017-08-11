import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

import App from './App';

import 'normalize.css';
import 'flexboxgrid2';
import './styles/styles.css';

addLocaleData([...en, ...ru]);

ReactDOM.render(
  <IntlProvider locale={navigator.language}>
    <App />
  </IntlProvider>,
  document.getElementById('root'),
);
