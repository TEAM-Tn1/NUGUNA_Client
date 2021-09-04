import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from '../components/profile';

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/profile' component={Profile}></Route>
      </Switch>
    </Router>
  );
};

export default MainRouter;
