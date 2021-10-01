import React, { FC } from 'react';
import * as S from './style';
import { reportIcon } from '../../assets/detailPost';
import { REPORT } from '../../constance/detailPost';

interface Props {
  title: string;
  hashtage: Array<string>;
}

const DetailContent: FC<Props> = ({ title, hashtage }) => {
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
    </S.DetailContent>
  );
};

export default DetailContent;
