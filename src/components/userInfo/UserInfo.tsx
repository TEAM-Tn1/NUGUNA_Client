import React from 'react';
import { reportIcon } from '../../assets/detailPost';
import { Header, Footer } from '../index';
import * as S from './style';

const UserInfo = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.UserInfoBox>
        <S.StudentInfoBox>
          <S.StudentInfo>
            <span>야찬코</span>
            <span>2100</span>
          </S.StudentInfo>
          <S.ReportButton to=''>
            <img src={reportIcon} alt='' />
            <span>신고하기</span>
          </S.ReportButton>
        </S.StudentInfoBox>
        <S.DormitoryInfo>
          <span>호실</span>
          <span>300호</span>
        </S.DormitoryInfo>
        <S.AccountInfo>
          <span>계좌번호</span>
          <span>NH농협 0102736697309</span>
        </S.AccountInfo>
      </S.UserInfoBox>
      <S.WrittenPostBox>
        <span>작성한 게시물</span>
      </S.WrittenPostBox>
      <Footer />
    </S.Wrapper>
  );
};

export default UserInfo;
