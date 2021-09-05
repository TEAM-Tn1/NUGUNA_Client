import React from 'react';
import Footer from '../footer';
import Header from '../header';
import * as S from './style';

const Profile = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.UserInfoBox>
        <S.StudentInfo>
          <span>야예코</span>
          <span>2103</span>
        </S.StudentInfo>
        <S.DormitoryInfo>
          <span>호실</span>
          <span>210호</span>
        </S.DormitoryInfo>
        <S.AccountInfo>
          <span>계좌번호</span>
          <span>NH농협 0102736697309</span>
        </S.AccountInfo>
      </S.UserInfoBox>
      <Footer />
    </S.Wrapper>
  );
};

export default Profile;
