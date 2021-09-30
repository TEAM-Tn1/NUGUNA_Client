import React, { useState } from 'react';
import * as S from './style';
import Header from '../header';
import Footer from '../footer';
import { GROUP, LIKE, NEWEST, POST_TITLE, TRADE } from '../../constance/post';
import PostList from './PostList';

const Post = () => {
  const [isPostClick, setIsPostClick] = useState({ trade: true, group: false });
  const [isOrderClick, setIsOrderClick] = useState({ newest: true, like: false });

  return (
    <S.Post>
      <Header />
      <S.ContentBox>
        <S.TitleLine>
          <p>{POST_TITLE}</p>
          <S.SubTitle
            isClick={isPostClick.trade}
            onClick={() => {
              setIsPostClick({ trade: true, group: false });
            }}
          >
            {TRADE}
          </S.SubTitle>
          <S.SubTitle
            isClick={isPostClick.group}
            onClick={() => {
              setIsPostClick({ trade: false, group: true });
            }}
          >
            {GROUP}
          </S.SubTitle>
          <S.SubTitle
            isClick={isOrderClick.newest}
            onClick={() => {
              setIsOrderClick({ newest: true, like: false });
            }}
          >
            {NEWEST}
          </S.SubTitle>
          <S.SubTitle
            isClick={isOrderClick.like}
            onClick={() => {
              setIsOrderClick({ newest: false, like: true });
            }}
          >
            {LIKE}
          </S.SubTitle>
        </S.TitleLine>
        <PostList />
      </S.ContentBox>
      <Footer />
    </S.Post>
  );
};

export default Post;
