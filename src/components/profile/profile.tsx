import React from 'react';
import { PROFILE_ELEMENT } from '../../constance/profile';
import { logout } from '../../assets/profile/index';
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
      {PROFILE_ELEMENT.map(ele => {
        return (
          <S.DetailPage key={ele.id} to={`/profile${ele.path}`}>
            <img src={ele.img} alt='' />
            <span>{ele.text}</span>
          </S.DetailPage>
        );
      })}
      <S.Logout>
        <img src={logout} alt='' />
        <span>로그아웃하기</span>
      </S.Logout>
      <Footer />
    </S.Wrapper>
  );
};

export default Profile;
