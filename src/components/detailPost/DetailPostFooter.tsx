import React, { FC, useMemo } from 'react';
import * as S from './style';
import { pay, dateIcon, peopleIcon } from '../../assets/post';
import { grayLike } from '../../assets/detailPost';

interface Props {
  type: string;
  money: string;
  heart: string;
  date: string;
  people: string;
}

const DetailPostFooter: FC<Props> = props => {
  const { type, money, heart, date, people } = props;
  const groupType = useMemo(() => {
    if (type === 'group')
      return (
        <S.DateAndPeople>
          <div>
            <img src={dateIcon} alt='date' />
            <p>~{date}</p>
          </div>
          <div>
            <img src={peopleIcon} alt='people' />
            <p>{people}명</p>
          </div>
        </S.DateAndPeople>
      );
  }, [type, date, people]);

  return (
    <S.DetailPostFooter>
      <div>
        <S.PayContent>
          {groupType}
          <S.PayAndLikeIcon src={pay} />
          <p>{money}원</p>
        </S.PayContent>
        <S.LikeContent>
          <S.PayAndLikeIcon src={grayLike} />
          <p>{heart}개</p>
        </S.LikeContent>
      </div>
    </S.DetailPostFooter>
  );
};

export default DetailPostFooter;
