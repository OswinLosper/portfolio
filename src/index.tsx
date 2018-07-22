import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import './styles/index.css';

import registerServiceWorker from './registerServiceWorker';
const { render } = ReactDOM;
const target = document.querySelector('#root') as HTMLElement;

import HomePage from '~/components/pages/home';
import AboutPage from '~/components/pages/about';
import WorkPage from '~/components/pages/work';
import CVPage from '~/components/pages/cv';
import LogosPage from '~/components/pages/logos';
import IOutBuildingPage from '~/components/pages/outbuilding';
import BeeHivePage from '~/components/pages/bee-hive';
import ProjectItem from '~/components/pages/project-item';
import OutBuildingPage from '~/components/pages/outbuilding';

// import { projectDataHeading } from '~/components/pages/projects';

render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/home" component={HomePage}/>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/work" component={WorkPage} />
      <Route exact path="/cv" component={CVPage} />
      <Route exact path="/logos" component={LogosPage} />
      <Route exact path="/outbuilding" component={OutBuildingPage} />
      {/* <Route exact path="/outbuilding" component={IOutBuildingPage} />
      <Route exact path="/bee-hive" component={BeeHivePage} /> */}

     {/* {
       projectDataHeading.map(item => {
         const { route, ...rest } = item;
         return (
           <Route exact path={`/${route}`} component={ProjectItem} {...rest}  />
         );
       })} */}

    </Switch>
  </BrowserRouter>,
  target,
);

registerServiceWorker();
