import React, { FC, useMemo } from 'react';
import * as S from './style';
import { emptyLike, pay, fillLike, dateIcon, peopleIcon } from '../../assets/post';

interface Props {
  title: string;
  money: number;
  like: number;
  hashtag: Array<string>;
  type: string;
  isLikeClick?: boolean;
  date?: string;
  people?: string;
  medium: string;
}

const PostContent: FC<Props> = props => {
  const { title, money, like, hashtag, type, date, people, isLikeClick, medium } = props;
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

  const likeIcon = useMemo(() => {
    if (isLikeClick) return <S.Icon src={fillLike} />;
    else return <S.Icon src={emptyLike} />;
  }, [isLikeClick]);

  return (
    <S.PostContent>
      <S.PostImg src={medium} />
      <S.PostInfo>
        <S.PostTitle>{title}</S.PostTitle>
        <S.PayAndLike>
          <div>
            <S.Icon src={pay} />
            <p>{money}원</p>
          </div>
          <div>
            {likeIcon}
            <p>{like}개</p>
          </div>
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
