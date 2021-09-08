import React from 'react';
import * as S from './style';
import { chickLogo } from '../../assets/logo';

const Logo = () => {
    return (
        <S.Logo>
        <img src={chickLogo} />
        <p>
          <span>누</span>구나
          <br />
          <span>구</span>매하고
          <br />
          <span>나</span>누자
        </p>
      </S.Logo>
    );
};

export default Logo;