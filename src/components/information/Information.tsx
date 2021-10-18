import React, { useState } from 'react';
import { Footer, Header } from '..';
import { Logo } from '../logo';
import * as S from './style';

const Information = () => {
  const [isFillAll, setIsFillAll] = useState(false);

  return (
    <S.Wrapper>
      <Header />
      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>
      <S.InfoContainer isFillAll={isFillAll}>
        <S.DormitoryInfoBox>
          <span>정보</span>
          <S.InputWrapper>
            <input type='text' id='dormitory' required />
            <label htmlFor='dormitory'>기숙사 호실</label>
          </S.InputWrapper>
        </S.DormitoryInfoBox>
        <S.AccountInfoBox>
          <span>계좌</span>
          <S.InputWrapper>
            <input type='text' id='bank-name' required />
            <label htmlFor='bank-name'>은행명</label>
          </S.InputWrapper>
          <S.InputWrapper>
            <input type='text' id='account-number' required />
            <label htmlFor='account-number'>계좌번호</label>
          </S.InputWrapper>
        </S.AccountInfoBox>
        <button>가입하기</button>
      </S.InfoContainer>
      <Footer />
    </S.Wrapper>
  );
};

export default Information;
