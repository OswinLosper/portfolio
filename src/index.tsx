import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import registerServiceWorker from './registerServiceWorker';

const { render } = ReactDOM;
const target = document.querySelector('#root') as HTMLElement;

import PortfolioItem from './components/pages/portfolio-item';

import HomePage from '~/components/pages/home';
import AboutPage from '~/components/pages/about';
import WorkPage from '~/components/pages/work';
import LogosPage from '~/components/pages/logos';
import CVPage from '~/components/pages/cv';
import AutomationPage from '~/components/pages/automation';

import PAGES from './pages';

render(
  <MuiThemeProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/work" component={WorkPage} />
        <Route exact path="/logos" component={LogosPage} />
        <Route exact path="/cv" component={CVPage} />
        <Route exact path="/automation" component={AutomationPage} />
        {PAGES.map(page => (
          <Route
            exact path={page.route}
            render={props => <PortfolioItem
              bannerInfo={page.bannerInfo}
              challenge={page.challenge}
              solution={page.solution}
              fonts={page.fonts}
              icons={page.icons}
              conclusion={page.conclusion}
              images={page.images}
              {...props}
            />}
          />
        ))}
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>,
  target,
);

registerServiceWorker();
