import React, { FC, useMemo } from 'react';
import * as S from './style';
import Header from '../header';
import { prevBtn } from '../../assets/writePost';
import {
  GROUPINFO,
  PAYINPUT,
  PAYTITLE,
  POSTTITLEANDHASHTAG,
  TRADETITLE,
} from '../../constance/writePost';
import Picture from './Picture';
import ExplainPost from './ExplainPost';
import PostInfo from './PostInfo';
import { useLocation } from 'react-router';
import { CHECKBTN } from '../../constance/writePost';

const WritePost: FC = () => {
  const type = useLocation().pathname.slice(12);

  const postInfo = useMemo(() => {
    if (type === 'trade') return <PostInfo title={PAYTITLE} placeholder={PAYINPUT} />;
    else if (type === 'group')
      return GROUPINFO.map(data => {
        return <PostInfo key={data.id} title={data.content} placeholder={data.placeholder} />;
      });
  }, [type]);

  return (
    <>
      <Header />
      <S.WritePost>
        <S.ContentBox>
          <S.PrevLine>
            <img src={prevBtn} alt='prev' />
            <p>돌아가기</p>
          </S.PrevLine>
          <S.Title>{TRADETITLE}</S.Title>
          {POSTTITLEANDHASHTAG.map(data => {
            return (
              <S.TitleAndInput isHashtag={data.id === 'hashtag' ? true : false}>
                <S.SubTitle>
                  {data.content}
                  {data.isNotNull && <span>*</span>}
                </S.SubTitle>
                <input placeholder={data.placeholder} />
              </S.TitleAndInput>
            );
          })}
          <Picture />
          <ExplainPost />
          {postInfo}
          <S.CheckBtn isClick={false}>
            <p>{CHECKBTN}</p>
          </S.CheckBtn>
        </S.ContentBox>
      </S.WritePost>
    </>
  );
};

export default WritePost;
