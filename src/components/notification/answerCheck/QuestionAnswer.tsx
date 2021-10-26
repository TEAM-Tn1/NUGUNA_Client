import React, { FC } from 'react';
import * as S from './style/index';

interface modalProps {
  name: string;
  content: string;
}

const QuestionAnswer: FC<modalProps> = ({ name, content }) => {
  return (
    <S.Modal>
      <div>
        <h2>문의답변</h2>
        <h5>{name}</h5>
        <div>{content}</div>
        <button>확인</button>
      </div>
    </S.Modal>
  );
};

export default QuestionAnswer;
