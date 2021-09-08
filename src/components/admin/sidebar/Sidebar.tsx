import React from 'react';
import * as S from './style';
import { reportIcon, suggestionIcon } from '../../../assets/defalut';
import { Link } from 'react-router-dom';
import Logo from '../../logo';

const Sidebar = () => {
  return (
    <S.Wrapper>
      <Logo />
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
