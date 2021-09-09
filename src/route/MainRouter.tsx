import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PostContanier } from '../container';

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/post' component={PostContanier} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
