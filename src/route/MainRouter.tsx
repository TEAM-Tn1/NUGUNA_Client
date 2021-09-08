import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from '../components/profile';
import modifyInfo from '../components/profile/profileOptions/modifyInfo';

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/profile' component={Profile}></Route>
        <Route exact path='/profile/modify' component={modifyInfo}></Route>
      </Switch>
    </Router>
  );
};

export default MainRouter;
