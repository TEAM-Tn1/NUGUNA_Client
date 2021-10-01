import React, { FC } from 'react';
import * as S from './style';
import PostContent from './PostContent';

interface Props {
  type: string;
}

const PostList: FC<Props> = ({ type }) => {
  const array = ['1', '2', '3', '4'];
  return (
    <S.PostList>
      {array.map(() => {
        return (
          <PostContent
            title={'귀여운 인형 팔아요yoy'}
            money={'5000'}
            like={'5'}
            type={type}
            date={'8/1'}
            people={'2/4'}
            hashtag={['#인형', '#인형', '#인형', '#인형']}
          />
        );
      })}
    </S.PostList>
  );
};

export default PostList;
