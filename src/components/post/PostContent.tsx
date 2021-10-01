import React, { FC, useMemo } from 'react';
import * as S from './style';
import { emptyLike, pay, like, dateIcon, peopleIcon } from '../../assets/post';

interface Props {
  title: string;
  money: string;
  like: string;
  hashtag: Array<string>;
  type: string;
  date?: string;
  people?: string;
}

const PostContent: FC<Props> = ({ title, money, like, hashtag, type, date, people }) => {
  const isTypeGroup = useMemo(() => {
    if (type === 'group')
      return (
        <S.DateAndPeople>
          <S.Icon src={dateIcon} />
          <p>~ {date}</p>
          <S.Icon src={peopleIcon} />
          <p>{people}명</p>
        </S.DateAndPeople>
      );
  }, [type]);

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
        {isTypeGroup}
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
