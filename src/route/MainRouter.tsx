import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Profile, UserInfo } from '../components';
import { ModifyInfo, LikedPost, WrittenPost } from '../components/profile/profileOptions';

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/profile/modify' component={ModifyInfo} />
        <Route exact path='/profile/liked_post' component={LikedPost} />
        <Route exact path='/profile/written_post' component={WrittenPost} />
        <Route exact path='/users/:email' component={UserInfo} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
