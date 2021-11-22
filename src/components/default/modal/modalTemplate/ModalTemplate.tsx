import axios from 'axios';
import React, { FC, useState } from 'react';
import { imageUpload } from '../../../../assets/modal';
import mypage from '../../../../util/api/mypage';
import userInfo from '../../../../util/api/userInfo';
import * as S from './style';

interface Props {
  subject: string;
  isShowModal: boolean;
  closeModal: () => void;
  email?: string;
}

const ModalTemplate: FC<Props> = ({ subject, isShowModal, closeModal, email }) => {
  const [inputs, setInputs] = useState({
    title: '',
    content: '',
  });
  const { title, content } = inputs;

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = () => {
    if (!(title && content)) {
      alert('빈칸이 있는지 확인해주세요.');
      return;
    }
    if (email) {
      userInfo
        .reportUser(title, content, email)
        .then(res => {
          console.log(res);
          alert('신고 내용이 접수되었습니다.');
          setInputs({
            title: '',
            content: '',
          });
          closeModal();
        })
        .catch(err => {
          throw err;
        });
    } else {
      mypage
        .registerSuggestion(title, content)
        .then(res => {
          alert('문의 사항이 접수되었습니다.');
          setInputs({
            title: '',
            content: '',
          });
          closeModal();
        })
        .catch(err => {
          throw err;
        });
    }
  };
  return (
    <>
      {isShowModal && (
        <S.Wrapper>
          <S.ModalContainer>
            <S.Title>{subject}</S.Title>
            <S.ContentBox email={email}>
              <input
                name='title'
                value={title}
                onChange={onChange}
                placeholder='제목을 입력해주세요'
                autoFocus
              />
              <textarea
                name='content'
                value={content}
                onChange={onChange}
                placeholder='내용을 1000자 이하로 작성해주세요'
                maxLength={1000}
              />
              {email && (
                <S.ImageBox>
                  <span>사진은 최대 1장만 가능합니다.</span>
                  <label htmlFor='upload'>
                    <img src={imageUpload} alt='' />
                  </label>
                  <input id='upload' type='file' />
                </S.ImageBox>
              )}
            </S.ContentBox>
            <S.ButtonBox>
              <button onClick={closeModal}>취소하기</button>
              <button onClick={onSubmit}>등록하기</button>
            </S.ButtonBox>
          </S.ModalContainer>
        </S.Wrapper>
      )}
    </>
  );
};

export default ModalTemplate;
