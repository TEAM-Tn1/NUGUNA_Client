import React, { FC, useMemo, useState } from 'react';
import * as S from './style';
import Header from '../header';
import { PREV } from '../../constance/detailPost';
import { prevIcon, modifyIcon, deleteIcon } from '../../assets/detailPost';
import DetailContent from './DetailContent';
import PostDeleteModal from './PostDeleteModal';

interface Props {
  title: string;
  description: string;
  price: number;
  tags: Array<string>;
  photo: Array<string>;
  lastModifyDate: string;
  like: boolean;
  count: number;
  headCount: number;
  currentHeadCount: number;
  date: string;
  userInfo: {
    writerEmail: string;
    writerName: string;
  };
  isUsedItem: boolean;
  setFeedId: (payload: number) => void;
}

const DetailPost: FC<Props> = props => {
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
          <DetailContent {...props} />
        </S.ContentBox>
      </S.DetailPost>
    </>
  );
};

export default DetailPost;
