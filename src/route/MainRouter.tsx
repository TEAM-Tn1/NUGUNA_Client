import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from '../components/profile';
import ModifyInfo from '../components/profile/profileOptions/modifyInfo';
import LikedPost from '../components/profile/profileOptions/likedPost';
import WrittenPost from '../components/profile/profileOptions/writtenPost';

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/profile/modify' component={ModifyInfo} />
        <Route exact path='/profile/liked_post' component={LikedPost} />
        <Route exact path='/profile/written_post' component={WrittenPost} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
