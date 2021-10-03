import React, { FC, useState } from 'react';
import { useHistory } from 'react-router';
import * as S from './style';

interface Props {
  top: string;
  text: string;
  image: string;
  isShow: boolean;
  setIsShow: any;
}

const OptionsTemplate: FC<Props> = ({ top, image, text, isShow, setIsShow }) => {
  const { push } = useHistory();

  const onClick = () => {
    setIsShow(!isShow);
    setTimeout(() => {
      push('/profile');
    }, 750);
  };

  return (
    <S.Wrapper onClick={onClick} top={top} isShow={isShow}>
      <img src={image} alt='' />
      <p>{text}</p>
    </S.Wrapper>
  );
};

export default OptionsTemplate;
