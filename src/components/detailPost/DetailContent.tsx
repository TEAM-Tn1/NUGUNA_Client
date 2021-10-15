import React, { FC } from 'react';
import * as S from './style';
import { reportIcon } from '../../assets/detailPost';
import PostImgSlider from './PostImgSlider';
import DetailPostFooter from './DetailPostFooter';
import { CHAT, REPORT } from '../../constance/detailPost';

interface Props {
  title: string;
  hashtage: Array<string>;
  userInfo: { writerEmail: string; writerName: string };
}

const DetailContent: FC<Props> = props => {
  const { title, hashtage, userInfo } = props;
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
          {hashtage.map((data: string, i: number) => {
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
        <PostImgSlider />
        <S.PostContent>
          제가 저번주에 샀는데 금방질려서 팔아요 원가 13000인데 10000에 팔게여 다들 많관부~~ 제가
          저번주에 샀는데 금방질려서 팔아요 원가 13000인데 10000에 팔게여 다들 많관부~~ 제가
          저번주에 샀는데 금방질려서 팔아요 원가 13000인데 10000에 팔게여 다들 많관부~~ 샀는데
          금방질려서 팔아요 원가 13000인데 10000에 팔게여 다들 많관부~~ 샀는데 금방질려서 팔아요
          원가 13000인데 10000에 팔게여 다들 많관부~~제가 저번주에 샀는데 금방질려서 팔아요 원가
          13000인데 10000에 팔게여 다들 많관부~~ 제가 저번주에 샀는데 금방질려서 팔아요 원가
          13000인데 10000에 팔게여 다들 많관부~~ 제가 저번주에 샀는데 금방질려서 팔아요 원가
          13000인데 10000에 팔게여 다들 많관부~~ 샀는데 금방질려서 팔아요 원가 13000인데 10000에
          팔게여 다들 많관부~~ 샀는데 금방질려서 팔아요 원가 13000인데 10000에 팔게여 다들
          많관부~~12345563ㅂ5345134
        </S.PostContent>
      </S.DetailContent>
      <DetailPostFooter type={'trade'} money={'5000'} heart={'5'} date={'8/1'} people={'2/4'} />
    </>
  );
};

export default DetailContent;
