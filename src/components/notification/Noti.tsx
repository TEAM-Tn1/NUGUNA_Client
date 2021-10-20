import React from 'react';
import * as S from './style';
import { exit_icon } from '../../assets/alarm/index';

const Noti = () => {
  return (
    <S.Wrapper>
      <S.AlarmHeader>
        <div>
          <img src={exit_icon} alt='' />
        </div>
        <h2>알람</h2>
        <div>태그등록</div>
      </S.AlarmHeader>
      
    </S.Wrapper>
  );
};

export default Noti;
