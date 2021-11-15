import React, { FC, useMemo } from 'react';
import * as S from './style';
import { reportIcon } from '../../assets/detailPost';
import PostImgSlider from './PostImgSlider';
import DetailPostFooter from './DetailPostFooter';
import { CHAT, REPORT } from '../../constance/detailPost';

interface Props {
  title: string;
  tag: Array<string>;
  description: string;
  price: number;
  count: number;
  headCount: number;
  currentHeadCount: number;
  date: string;
  isUsedItem: boolean;
  like: boolean;
  medium: string;
  userInfo: { writerEmail: string; writerName: string };
}

const DetailContent: FC<Props> = props => {
  const {
    title,
    tag,
    userInfo,
    description,
    price,
    count,
    headCount,
    currentHeadCount,
    date,
    like,
    medium,
    isUsedItem,
  } = props;

  const makeDates = useMemo(() => {
    const month = date && date.slice(5, 7);
    const dates = date && date.slice(8);
    return `${month}/${dates}`;
  }, [date]);

  const type = useMemo(() => {
    if (isUsedItem) return 'trade';
    else return 'group';
  }, [isUsedItem]);

  return (
    <>
      <S.DetailContent>
        <S.TitleLine>
          <S.PostTitle>{title}</S.PostTitle>
          <S.Report>
            <S.ReportIcon src={reportIcon} />
            <p>{REPORT}</p>
          </S.Report>
        </S.TitleLine>
        <S.HashTageLine>
          {tag &&
            tag.map((data: string, i: number) => {
              return (
                <S.HashTag key={i}>
                  <p>{data}</p>
                </S.HashTag>
              );
            })}
        </S.HashTageLine>
        <S.UserInfoAndChatLine>
          <div>
            <p>{userInfo.writerName}</p>
            <p>{userInfo.writerEmail}</p>
          </div>
          <S.ChattingBtn>
            <p>{CHAT}</p>
          </S.ChattingBtn>
        </S.UserInfoAndChatLine>
        <PostImgSlider img={medium} />
        <S.PostContent>{description}</S.PostContent>
      </S.DetailContent>
      <DetailPostFooter
        type={type}
        money={price}
        heart={count}
        date={makeDates}
        like={like}
        people={`${currentHeadCount}/${headCount}`}
      />
    </>
  );
};

export default DetailContent;
