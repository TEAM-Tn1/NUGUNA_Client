import React from 'react';
import * as S from './style';
import { Header, Post, Footer } from '..';
import { Logo } from '../logo';
import PostContent from '../post/PostContent';
import { Link } from 'react-router-dom';

const Main = () => {
  const array = ['1', '2'];
  return (
    <S.Wrapper>
      <Header />
      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>
      <S.PostInfo>
        <div>
          <h1>거래게시물</h1>
        </div>
        {array.map(() => {
          return (
            <PostContent
              title={'귀여운 인형 팔아요yoy'}
              money={'5000'}
              like={'5'}
              type={'trade'}
              date={'8/1'}
              people={'2/4'}
              hashtag={['#인형', '#인형', '#인형']}
            />
          );
        })}
        <div>
          <Link to={'/post'}>
            <span>게시물 더보기 ＞</span>
          </Link>
        </div>
      </S.PostInfo>
      <S.PostInfo>
        <div>
          <h1>공구게시물</h1>
        </div>
        {array.map(() => {
          return (
            <PostContent
              title={'귀여운 인형 팔아요yoy'}
              money={'5000'}
              like={'5'}
              type={'group'}
              date={'8/1'}
              people={'2/4'}
              hashtag={['#인형', '#인형', '#인형']}
            />
          );
        })}
        <div>
          <Link to={'/post'}>
            <span>게시물 더보기 ＞</span>
          </Link>
        </div>
      </S.PostInfo>
      <Footer />
    </S.Wrapper>
  );
};

export default Main;
