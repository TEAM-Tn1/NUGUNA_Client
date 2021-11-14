import React from 'react';
import * as S from './style';
import { exit_icon } from '../../assets/alarm/index';
import { List } from './list/index';
import { QuestionAnswer } from './answerCheck';

//더미데이터
const testArray: number[] = [];
for (let i = 0; i < 10; i++) {
  testArray.push(i);
}
const Data = {
  notification_id: 1,
  title: '문의',
  content: 'question',
  message: '이 기능 생겼으면 좋겠당 글에 답변이 달렸습니다.',
  is_watch: true,
};
const { notification_id, title, content, message, is_watch } = Data;

const Noti = () => {
  return (
    <S.Wrapper>
      <QuestionAnswer
        content={
          '문의하신 계좌변경 관련해서는 마이페이지로 들어가 내 정보 수정하기를 누르면 목록 아래 쪽에 생기는 정보수정란으로 수정이 가능합니다. 감사합니다.'
        }
      />
      <S.AlarmHeader>
        <div>
          <img src={exit_icon} alt='' />
        </div>
        <h2>알람</h2>
        <div>태그등록</div>
      </S.AlarmHeader>
      {testArray.map((_, index) => {
        return (
          <List
            key={index}
            notification_id={notification_id}
            title={title}
            content={content}
            message={message}
            is_watch={is_watch}
          />
        );
      })}
    </S.Wrapper>
  );
};

export default Noti;
