import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
const { render } = ReactDOM;
const target = document.querySelector('#root') as HTMLElement;

import HomePage from '~/components/pages/home';


render(
  <BrowserRouter>
    <Route exact path="/" component={HomePage} />
  </BrowserRouter>,
  target,
);

registerServiceWorker();
