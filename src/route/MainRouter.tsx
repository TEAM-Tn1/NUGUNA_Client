import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PostContanier, DetailPostContainer } from '../container';

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/post' component={PostContanier} />
        <Route exact path='/view/post' component={DetailPostContainer} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
