import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  PostContanier,
  DetailPostContainer,
  WritePostContainer,
  ChatListContainer,
} from '../container';

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/post' component={PostContanier} />
        <Route exact path='/view/post/:id' component={DetailPostContainer} />
        <Route exact path='/write/post/:type' component={WritePostContainer} />
        <Route exact path='/chatting' component={ChatListContainer} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
