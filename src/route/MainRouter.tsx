import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Auth, Information, Mypage, UserInfo } from '../components';
import { ModifyInfo, LikedPost, WrittenPost } from '../components/mypage/mypageOptions';
import {
  PostContanier,
  DetailPostContainer,
  WritePostContainer,
  ChatListContainer,
  DetailChatContainer,
  SearchContainer,
} from '../container';

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/mypage' component={Mypage} />
        <Route exact path='/mypage/modify' component={ModifyInfo} />
        <Route exact path='/mypage/liked_post' component={LikedPost} />
        <Route exact path='/mypage/written_post' component={WrittenPost} />
        <Route exact path='/profile/:email' component={UserInfo} />
        <Route exact path='/post' component={PostContanier} />
        <Route exact path='/view/post/:id' component={DetailPostContainer} />
        <Route exact path='/write/post/:type' component={WritePostContainer} />
        <Route exact path='/chatting' component={ChatListContainer} />
        <Route exact path='/auth' component={Auth} />
        <Route exact path='/auth/information' component={Information} />
        <Route exact path='/chat/:type/:id' component={DetailChatContainer} />
        <Route exact path='/search' component={SearchContainer} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
