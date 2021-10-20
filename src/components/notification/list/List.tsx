import React from 'react';
import * as S from './style';
import { chat_icon, question_icon, report_icon, tag_icon } from '../../../assets/alarm/index';

const List = () => {
  return (
    <S.List>
      <div>
        <img src={chat_icon} alt='' />
      </div>
      <div>
        <span>채팅</span>
        <p>김박박: 내일 삼??</p>
      </div>
    </S.List>
  );
};

export default List;
