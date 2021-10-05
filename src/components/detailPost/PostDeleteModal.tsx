import React, { FC } from 'react';
import * as S from './style';
import { CANCLE, CHECKBTN, DELETEEXPLAIN, DELETETITLE } from '../../constance/detailPost';

interface Props {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostDeleteModal: FC<Props> = props => {
  const { setIsOpenModal } = props;

  const checkBtnClickHandler = () => {
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
