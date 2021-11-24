import React, { useEffect, useState } from 'react';
import { reportIcon } from '../../assets/detailPost';
import ModalTemplate from '../default/modal/modalTemplate';
import { Header, Footer } from '../index';
import * as S from './style';
import userInfo from '../../util/api/userInfo';

const UserInfo = ({ match }: any) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [userInfos, setUserInfos] = useState({
    name: '',
    gcn: '',
    email: '',
    room_number: '',
    account_number: '',
  });
  const { name, gcn, email, room_number, account_number } = userInfos;
  const { getUserInfo } = userInfo;

  const openModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  useEffect(() => {
    getUserInfo(match.params.email)
      .then(res => {
        const { name, gcn, email, room_number, account_number } = res.data;
        setUserInfos({
          name,
          gcn,
          email,
          room_number,
          account_number,
        });
      })
      .catch(err => {
        throw err;
      });
  }, []);

  return (
    <S.Wrapper>
      <Header />
      <S.UserInfoBox>
        <S.StudentInfoBox>
          <S.StudentInfo>
            <span>{name || '존재하지 않는 유저입니다'}</span>
            <span>{gcn}</span>
          </S.StudentInfo>
          {name && (
            <S.ReportButton onClick={openModal}>
              <img src={reportIcon} alt='' />
              <span>신고하기</span>
            </S.ReportButton>
          )}
        </S.StudentInfoBox>
        <S.DormitoryInfo>
          <span>{name && '호실'}</span>
          <span>{`${room_number}호`}</span>
        </S.DormitoryInfo>
        <S.AccountInfo>
          <span>{name && '계좌번호'}</span>
          <span>{account_number || '계좌번호를 공개하지 않은 유저입니다.'}</span>
        </S.AccountInfo>
      </S.UserInfoBox>
      <S.WrittenPostBox>
        <span>{name && '작성한 게시물'}</span>
      </S.WrittenPostBox>
      <Footer />
      <ModalTemplate
        subject='신고하기'
        isShowModal={isShowModal}
        closeModal={closeModal}
        id={email}
      />
    </S.Wrapper>
  );
};

export default UserInfo;
