import React, { useMemo, useState } from 'react';
import * as S from './style';
import Header from '../header';
import { PREV } from '../../constance/detailPost';
import { prevIcon, modifyIcon, deleteIcon } from '../../assets/detailPost';
import DetailContent from './DetailContent';
import PostDeleteModal from './PostDeleteModal';

const DetailPost = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const deleteBtnClickHandler = () => {
    setIsOpenModal(true);
  };

  const openPostDeleteModal = useMemo(() => {
    if (isOpenModal) return <PostDeleteModal setIsOpenModal={setIsOpenModal} />;
  }, [isOpenModal]);

  return (
    <>
      <Header />
      <S.DetailPost>
        <S.ContentBox>
          {openPostDeleteModal}
          <S.TopLine>
            <div>
              <S.Icon src={prevIcon} />
              <S.PrevComment>{PREV}</S.PrevComment>
            </div>
            <div>
              <S.Icon src={modifyIcon} />
              <S.Icon src={deleteIcon} onClick={deleteBtnClickHandler} />
            </div>
          </S.TopLine>
          <DetailContent
            title={'일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십'}
            hashtage={['#인형', '#인형팝니다', '#인형', '#인형사세요', '#인형사세요']}
            userInfo={{ writerEmail: '201107khj@dsm.hs.kr', writerName: '김혜준' }}
          />
        </S.ContentBox>
      </S.DetailPost>
    </>
  );
};

export default DetailPost;
