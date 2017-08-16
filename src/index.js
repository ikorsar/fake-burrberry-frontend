/* eslint-disable react/jsx-filename-extension */

import 'normalize.css';
import 'flexboxgrid2'; // eslint-disable-line

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './styles/styles.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
