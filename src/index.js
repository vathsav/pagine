import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

// Components
import Blog from './modules/blog';
import Error404 from './modules/error/component/404';
import Home from './modules/home';
import Portfolio from './modules/portfolio';

// Styles
import './index.css';

// URLs
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route path="*" component={Error404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);

// PWA https://bit.ly/CRA-PWA
serviceWorker.register();
