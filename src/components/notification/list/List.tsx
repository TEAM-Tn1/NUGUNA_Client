import React from 'react';
import * as S from './style';
import { chat_icon, question_icon, report_icon, tag_icon } from '../../../assets/alarm/index';

const List = () => {
  return (
    <S.List>
      <div>
        <div />
      </div>
      <div>
        <div>
          <img src={question_icon} alt='' />
        </div>
        <div>
          <span>문의사항</span>
          <p>이 기능 생겼으면 좋겠당 글에 답변이 달렸습니다.</p>
        </div>
      </div>
    </S.List>
  );
};

export default List;
