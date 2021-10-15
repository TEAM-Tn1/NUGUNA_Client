import React from 'react';
import * as S from './style';
import { PCITUREEXPLAIN, PICTURETITLE } from '../../constance/writePost';
import { plus } from '../../assets/writePost';

const Picture = () => {
  return (
    <S.PictureContent>
      <S.SubTitle>
        {PICTURETITLE}
        <span>*</span>
      </S.SubTitle>
      <S.PictureExplain>{PCITUREEXPLAIN}</S.PictureExplain>
      <S.PicturePlusBtn>
        <img src={plus} alt='plus' />
      </S.PicturePlusBtn>
    </S.PictureContent>
  );
};

export default Picture;
