import React from 'react';
import * as S from './style';
import { prev } from '../../assets/chat';

const Header = () => {
  return (
    <S.Header>
      <S.HeaderWrapper>
        <img src={prev} alt='prev' />
        <p>일이삼사오육칠팔구십</p>
        <span>4</span>
      </S.HeaderWrapper>
    </S.Header>
  );
};

export default Header;
