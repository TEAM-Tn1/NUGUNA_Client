import React, { FC } from 'react';
import * as S from './style';
import { emptyLike, pay, like } from '../../assets/post';

interface Props {
  title: string;
  money: string;
  like: string;
  hashtag: Array<string>;
}

const PostContent: FC<Props> = ({ title, money, like, hashtag }) => {
  return (
    <S.PostContent>
      <S.PostImg />
      <S.PostInfo>
        <S.PostTitle>{title}</S.PostTitle>
        <S.PayAndLike>
          <S.Icon src={pay} />
          <p>{money}원</p>
          <S.Icon src={emptyLike} />
          <p>{like}개</p>
        </S.PayAndLike>
        <S.HashtagLine>
          {hashtag.map((data: string, i: number) => {
            return (
              <S.Hashtag key={i}>
                <p>{data}</p>
              </S.Hashtag>
            );
          })}
        </S.HashtagLine>
      </S.PostInfo>
    </S.PostContent>
  );
};

export default PostContent;
