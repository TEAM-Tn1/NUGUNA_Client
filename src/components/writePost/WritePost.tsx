import React, { FC } from 'react';
import * as S from './style';
import Header from '../header';
import { prevBtn } from '../../assets/writePost';
import { POSTTITLEANDHASHTAG, TRADETITLE } from '../../constance/writePost';

const WritePost: FC = () => {
  return (
    <>
      <Header />
      <S.WritePost>
        <S.ContentBox>
          <S.PrevLine>
            <img src={prevBtn} />
            <p>돌아가기</p>
          </S.PrevLine>
          <S.Title>{TRADETITLE}</S.Title>
          {POSTTITLEANDHASHTAG.map(data => {
            return (
              <S.TitleAndInput>
                <p>
                  {data.content}
                  {data.isNotNull && <span>*</span>}
                </p>
                <input placeholder={data.placeholder} />
              </S.TitleAndInput>
            );
          })}
        </S.ContentBox>
      </S.WritePost>
    </>
  );
};

export default WritePost;
