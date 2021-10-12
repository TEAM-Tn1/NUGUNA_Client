import React from 'react';
import * as S from './style';

const Template = () => {
  return (
    <S.Wrapper>
      <S.ModalContainer>
        <S.Title>문의사항</S.Title>
        <S.ContentBox>
          <input placeholder='제목을 입력해주세요' />
          <textarea placeholder='문의할 내용을 1000자 이하로 작성해주세요' />
        </S.ContentBox>
        <S.ButtonBox>
          <button>취소하기</button>
          <button>등록하기</button>
        </S.ButtonBox>
      </S.ModalContainer>
    </S.Wrapper>
  );
};

export default Template;
