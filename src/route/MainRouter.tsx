import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Mypage, UserInfo } from '../components';
import { ModifyInfo, LikedPost, WrittenPost } from '../components/mypage/mypageOptions';

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/mypage' component={Mypage} />
        <Route exact path='/mypage/modify' component={ModifyInfo} />
        <Route exact path='/mypage/liked_post' component={LikedPost} />
        <Route exact path='/mypage/written_post' component={WrittenPost} />
        <Route exact path='/profile/:email' component={UserInfo} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
