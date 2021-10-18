import React from 'react';
import { Link } from 'react-router-dom';
import { Footer, Header } from '..';
import { authLogo } from '../../assets/auth';
import { Logo } from '../logo';
import * as S from './style';

const Auth = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>
      <S.MainText>누구나 가입하기</S.MainText>
      <S.AuthLinkContainer>
        <S.Logo>
          <img src={authLogo} alt='' />
        </S.Logo>
        <p>DSM Auth로 시작하기</p>
      </S.AuthLinkContainer>
      <S.BottomTextContainer>
        <p>계속하면 DSM Auth의 개인정보 수집 이용에 동의하고</p>
        <p>
          DSM Auth의 <Link to=''>개인정보 처리방침</Link>을(를) 읽었음을 확인하는 것입니다.
        </p>
      </S.BottomTextContainer>
      <Footer />
    </S.Wrapper>
  );
};

export default Auth;
