import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PostReport, UserReport, Suggestion } from '../components/admin/index';

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/admin/report/feed' component={PostReport} />
        <Route exact path='/admin/report/user' component={UserReport} />
        <Route exact path='/admin/question' component={Suggestion} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
