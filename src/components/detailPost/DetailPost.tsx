import React from 'react';
import * as S from './style';
import Header from '../header';
import { PREV } from '../../constance/detailPost';
import { prevIcon, modifyIcon, deleteIcon } from '../../assets/detailPost';
import DetailContent from './DetailContent';

const DetailPost = () => {
  return (
    <S.DetailPost>
      <Header />
      <S.ContentBox>
        <S.TopLine>
          <div>
            <S.Icon src={prevIcon} />
            <S.PrevComment>{PREV}</S.PrevComment>
          </div>
          <div>
            <S.Icon src={modifyIcon} />
            <S.Icon src={deleteIcon} />
          </div>
        </S.TopLine>
        <DetailContent
          title={'일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십'}
          hashtage={['#인형', '#인형팝니다', '#인형', '#인형사세요', '#인형사세요']}
          userInfo={{ writerEmail: '201107khj@dsm.hs.kr', writerName: '김혜준' }}
        />
      </S.ContentBox>
    </S.DetailPost>
  );
};

export default DetailPost;
