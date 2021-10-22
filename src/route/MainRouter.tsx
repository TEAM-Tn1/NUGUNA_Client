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
import { PostReport, UserReport, Suggestion } from '../components/admin/index';
import Main from '../components/main/index';
import { Noti } from '../components/notification/index';
import { TagRegister } from '../components/notification/tagRegister';

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
        <Route exact path='/admin/report/feed' component={PostReport} />
        <Route exact path='/admin/report/user' component={UserReport} />
        <Route exact path='/admin/question' component={Suggestion} />
        <Route exact path='/auth' component={Auth} />
        <Route exact path='/auth/information' component={Information} />
        <Route exact path='/chat/:type/:id' component={DetailChatContainer} />
        <Route exact path='/search' component={SearchContainer} />
        <Route exact path='/main' component={Main} />
        <Route exact path='/noti/list' component={Noti} />  
        <Route exact path='/noti/tag' component={TagRegister} /> 
      </Switch>
    </Router>
  );
};

export default MainRouter;
