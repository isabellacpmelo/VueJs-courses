import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import './index.css';
import { Abc } from './templates/Abc';
import { App } from './templates/App';
import { Page404 } from './templates/Page404';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/abc/:slug?/:id?" component={Abc} />
        <Route path="/abc/:slug?" component={Abc} />
        <Route path="/abc" component={Abc} />
        <Route path="/" component={App} exact />
        <Route path="*" component={Page404} exact />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
