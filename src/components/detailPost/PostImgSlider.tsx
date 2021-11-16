import React, { FC, useMemo } from 'react';
import * as S from './style';

interface Props {
  photo: Array<string>;
}

const PostImgSlider: FC<Props> = props => {
  const { photo } = props;
  let move = 0;
  let sliderBox = document.getElementById('sliderBox') as HTMLElement;

  const prevBtnClickHandler = () => {
    if (move > 0) {
      move--;
      sliderBox.style.left = move * -100 + '%';
    }
  };

  const nextBtnClickHandler = () => {
    if (move < photo.length - 1) {
      move++;
      sliderBox.style.left = move * -100 + '%';
    }
  };

  const sliderItem = useMemo(() => {
    return photo.map(data => {
      return (
        <S.SliderItem length={photo.length}>
          <img src={data} alt='img' />
        </S.SliderItem>
      );
    });
  }, [photo]);

  return (
    <S.PostImgSlider>
      <p onClick={prevBtnClickHandler}>＜</p>
      <S.Container>
        <S.SliderBox length={photo.length} id='sliderBox'>
          {sliderItem}
        </S.SliderBox>
      </S.Container>
      <p onClick={nextBtnClickHandler}>＞</p>
    </S.PostImgSlider>
  );
};

export default PostImgSlider;
