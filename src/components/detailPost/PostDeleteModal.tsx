import React, { FC, useEffect } from 'react';
import * as S from './style';
import { CANCLE, CHECKBTN, DELETEEXPLAIN, DELETETITLE } from '../../constance/detailPost';
import { useDispatch } from 'react-redux';
import { POST_DELETE } from '../../modules/action/detailPost/interface';
import { useHistory } from 'react-router';

interface Props {
  isSuccessDeletePost: boolean | undefined;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostDeleteModal: FC<Props> = props => {
  const { setIsOpenModal, isSuccessDeletePost } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isSuccessDeletePost) history.push('/post');
  }, [isSuccessDeletePost]);

  const checkBtnClickHandler = () => {
    dispatch({ type: POST_DELETE });
    setIsOpenModal(false);
  };

  const cancleBtnClickHandler = () => {
    setIsOpenModal(false);
  };

  return (
    <S.PostDeleteModal>
      <S.DeleteTitle>{DELETETITLE}</S.DeleteTitle>
      <S.DeleteExplain>{DELETEEXPLAIN}</S.DeleteExplain>
      <S.CheckBtnLine>
        <S.CheckBtn onClick={checkBtnClickHandler}>
          <p onClick={checkBtnClickHandler}>{CHECKBTN}</p>
        </S.CheckBtn>
        <S.CancleBtn onClick={cancleBtnClickHandler}>
          <p onClick={cancleBtnClickHandler}>{CANCLE}</p>
        </S.CancleBtn>
      </S.CheckBtnLine>
    </S.PostDeleteModal>
  );
};

export default PostDeleteModal;
