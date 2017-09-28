import React from 'react';
// import package
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import 'normalize.css/normalize.css';
import 'ress/dist/ress.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import relative path
import Home from './Home';
import NotFound from './NotFound';

const Main = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Main;
