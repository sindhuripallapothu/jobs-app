import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';

const Container = () => (
  <div className="app-routes">
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </div>
);

export default Container;