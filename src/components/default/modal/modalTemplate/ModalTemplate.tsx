import React, { FC, useState } from 'react';
import { imageUpload } from '../../../../assets/modal';
import mypage from '../../../../util/api/mypage';
import * as S from './style';

interface Props {
  subject: string;
  isShowModal: boolean;
  closeModal: () => void;
  isReport?: boolean;
}

const ModalTemplate: FC<Props> = ({ subject, isShowModal, closeModal, isReport }) => {
  const [inputs, setInputs] = useState({
    title: '',
    content: '',
  });
  const { title, content } = inputs;
  const { registerSuggestion } = mypage;

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
    if (isReport) {
    } else {
      registerSuggestion(title, content)
        .then(res => {
          alert('문의 사항이 등록되었습니다.');
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
            <S.ContentBox isReport={isReport}>
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
              {isReport && (
                <S.ImageBox>
                  <span>사진은 최대 1장만 가능합니다.</span>
                  <img src={imageUpload} alt='' />
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
