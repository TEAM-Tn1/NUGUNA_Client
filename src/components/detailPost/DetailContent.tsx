import React, { FC } from 'react';
import * as S from './style';
import { reportIcon } from '../../assets/detailPost';
import { CHAT, REPORT } from '../../constance/detailPost';

interface Props {
  title: string;
  hashtage: Array<string>;
  userInfo: { writerEmail: string; writerName: string };
}

const DetailContent: FC<Props> = props => {
  const { title, hashtage, userInfo } = props;
  return (
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
    </S.DetailContent>
  );
};

export default DetailContent;
