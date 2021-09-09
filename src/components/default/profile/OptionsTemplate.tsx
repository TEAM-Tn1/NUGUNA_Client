import React, { FC } from 'react';
import * as S from './style';

interface Props {
  top: string;
  text: string;
  image: string;
}

const OptionsTemplate: FC<Props> = ({ top, image, text }) => {
  return (
    <S.Wrapper style={{ top: top }}>
      <img src={image} alt='' />
      <p>{text}</p>
    </S.Wrapper>
  );
};

export default OptionsTemplate;
