import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

// Components
import Blog from './modules/blog';
import Error404 from './modules/error/component/404';
import Home from './modules/home';
import Portfolio from './modules/portfolio';

// Constants
import { URL_BLOG, URL_HOME, URL_PORTFOLIO } from './utils/constants';

// Styles
import './styles/css/main.css';

// URLs
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path={URL_HOME} component={Home} />
      <Route exact path={URL_BLOG} component={Blog} />
      <Route exact path={URL_PORTFOLIO} component={Portfolio} />
      <Route path="*" component={Error404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);

// PWA https://bit.ly/CRA-PWA
serviceWorker.register();
