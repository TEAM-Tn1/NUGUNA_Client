import React, { FC, useState } from 'react';
import * as S from './style';
import { PCITUREEXPLAIN, PICTURETITLE } from '../../constance/writePost';
import { plus } from '../../assets/writePost';

interface Props {
  img: Array<File>;
  setImg: (payload: Array<File>) => void;
}

const Picture: FC<Props> = props => {
  const { img, setImg } = props;
  const [imgUrl, setImgUrl] = useState<Array<string>>([]);

  const imgChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (imgUrl.length <= 4) {
      if (event.currentTarget.files) {
        setImg(img.concat([event.currentTarget.files[0]]));
        setImgUrl(imgUrl.concat([URL.createObjectURL(event.currentTarget.files[0])]));
      }
    } else alert('사진은 최대 5장까지 등록가능합니다.');
  };

  return (
    <S.PictureContent>
      <S.SubTitle>
        {PICTURETITLE}
        <span>*</span>
      </S.SubTitle>
      <S.PictureExplain>{PCITUREEXPLAIN}</S.PictureExplain>
      <div>
        <S.PicturePlusBtn htmlFor='imgs'>
          <img src={plus} alt='plus' />
        </S.PicturePlusBtn>
        <input
          type='file'
          id='imgs'
          accept='image/*'
          style={{ display: 'none' }}
          onChange={imgChangeHandler}
        />
        {imgUrl.map(data => {
          return <S.PreviewImg src={data} />;
        })}
      </div>
    </S.PictureContent>
  );
};

export default Picture;
