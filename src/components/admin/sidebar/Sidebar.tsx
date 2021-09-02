import React from 'react';
import * as S from './style';
import { chickLogo, reportIcon, suggestionIcon } from '../../../assets/defalut';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <S.Wrapper>
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
      <S.Called>
        <Link to='/admin/report'>
          <img src={reportIcon} />
          <p>신고상황</p>
        </Link>
        <Link to='/admin/suggestion'>
          <img src={suggestionIcon} />
          <p>문의상황</p>
        </Link>
      </S.Called>
    </S.Wrapper>
  );
};

export default Sidebar;
