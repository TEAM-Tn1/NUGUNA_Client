import React, { useState } from 'react';
import { reportIcon } from '../../assets/detailPost';
import ModalTemplate from '../default/modal/modalTemplate';
import { Header, Footer } from '../index';
import * as S from './style';

const UserInfo = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const openModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  return (
    <S.Wrapper>
      <Header />
      <S.UserInfoBox>
        <S.StudentInfoBox>
          <S.StudentInfo>
            <span>야찬코</span>
            <span>2100</span>
          </S.StudentInfo>
          <S.ReportButton onClick={openModal}>
            <img src={reportIcon} alt='' />
            <span>신고하기</span>
          </S.ReportButton>
        </S.StudentInfoBox>
        <S.DormitoryInfo>
          <span>호실</span>
          <span>300호</span>
        </S.DormitoryInfo>
        <S.AccountInfo>
          <span>계좌번호</span>
          <span>NH농협 0102736697309</span>
        </S.AccountInfo>
      </S.UserInfoBox>
      <S.WrittenPostBox>
        <span>작성한 게시물</span>
      </S.WrittenPostBox>
      <Footer />
      <ModalTemplate
        subject='신고하기'
        isShowModal={isShowModal}
        closeModal={closeModal}
        isReport
      />
    </S.Wrapper>
  );
};

export default UserInfo;
