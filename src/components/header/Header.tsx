import React from 'react';
import * as S from './style';
import { search, alram } from '../../assets/header';

const Header = () => {
  return (
    <S.Header>
      <S.Wrapper>
        <S.SearchInputBox>
          <S.SearchImg src={search} />
          <S.SearchInput type='text' />
        </S.SearchInputBox>
        <S.AlramBox>
          <S.AlramImg src={alram} />
          <S.AlramCheck />
        </S.AlramBox>
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;
