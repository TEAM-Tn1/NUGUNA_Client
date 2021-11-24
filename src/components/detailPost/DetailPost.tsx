import React, { FC, useMemo, useState } from 'react';
import * as S from './style';
import Header from '../header';
import { PREV } from '../../constance/detailPost';
import { prevIcon, modifyIcon, deleteIcon } from '../../assets/detailPost';
import DetailContent from './DetailContent';
import PostDeleteModal from './PostDeleteModal';
import { useHistory } from 'react-router';

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
  setRoomId: (payload: string) => void;
  isSuccessDeletePost: boolean | undefined;
  socket: React.MutableRefObject<SocketIOClient.Socket | undefined>;
}

const DetailPost: FC<Props> = props => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const { isSuccessDeletePost, userInfo, date, headCount } = props;
  const userEmail = localStorage.getItem('email') as string;
  const history = useHistory();

  const deleteBtnClickHandler = () => {
    setIsOpenModal(true);
  };

  const openPostDeleteModal = useMemo(() => {
    if (isOpenModal)
      return (
        <PostDeleteModal
          setIsOpenModal={setIsOpenModal}
          isSuccessDeletePost={isSuccessDeletePost}
        />
      );
  }, [isOpenModal, isSuccessDeletePost]);

  const modifyBtnClickHandler = () => {
    if (!headCount && !date) history.push('/write/post/trade');
    else if (headCount && date) history.push('/write/post/group');
  };

  const writerBtn = useMemo(() => {
    if (userEmail === userInfo.writerEmail)
      return (
        <div>
          <S.Icon src={modifyIcon} onClick={modifyBtnClickHandler} />
          <S.Icon src={deleteIcon} onClick={deleteBtnClickHandler} />
        </div>
      );
  }, [userEmail, userInfo]);

  const prevBtnClickHandler = () => {
    history.push('/post');
  };

  return (
    <>
      <Header />
      <S.DetailPost>
        <S.ContentBox>
          {openPostDeleteModal}
          <S.TopLine>
            <div>
              <S.Icon src={prevIcon} onClick={prevBtnClickHandler} />
              <S.PrevComment>{PREV}</S.PrevComment>
            </div>
            {writerBtn}
          </S.TopLine>
          <DetailContent {...props} />
        </S.ContentBox>
      </S.DetailPost>
    </>
  );
};

export default DetailPost;
