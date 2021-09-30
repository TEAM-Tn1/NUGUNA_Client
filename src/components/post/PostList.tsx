import React from 'react';
import * as S from './style';
import PostContent from './PostContent';

const PostList = () => {
  const array = ['1', '2', '3', '4'];
  return (
    <S.PostList>
      {array.map(() => {
        return (
          <PostContent
            title={'귀여운 인형 팔아요yoy'}
            money={'5000'}
            like={'5'}
            hashtag={['#인형', '#인형', '#인형', '#인형']}
          />
        );
      })}
    </S.PostList>
  );
};

export default PostList;
