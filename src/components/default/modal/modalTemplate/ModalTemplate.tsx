import React, { FC } from 'react';
import { imageUpload } from '../../../../assets/modal';
import * as S from './style';

interface Props {
  title: string;
  isShowModal: boolean;
  closeModal: () => void;
  isReport?: boolean;
}

const ModalTemplate: FC<Props> = ({ title, isShowModal, closeModal, isReport }) => {
  return (
    <>
      {isShowModal && (
        <S.Wrapper>
          <S.ModalContainer>
            <S.Title>{title}</S.Title>
            <S.ContentBox isReport={isReport}>
              <input placeholder='제목을 입력해주세요' autoFocus />
              <textarea placeholder='내용을 1000자 이하로 작성해주세요' />
              {isReport && (
                <S.ImageBox>
                  <span>사진은 최대 1장만 가능합니다.</span>
                  <img src={imageUpload} alt='' />
                </S.ImageBox>
              )}
            </S.ContentBox>
            <S.ButtonBox>
              <button onClick={closeModal}>취소하기</button>
              <button>등록하기</button>
            </S.ButtonBox>
          </S.ModalContainer>
        </S.Wrapper>
      )}
    </>
  );
};

export default ModalTemplate;
