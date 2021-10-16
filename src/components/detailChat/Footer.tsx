import React from 'react';
import * as S from './style';
import { setting, send } from '../../assets/chat';

const Footer = () => {
  return (
    <S.FooterBox>
      <S.FooterWrapper>
        <img src={setting} alt='setting' />
        <S.ChatInput />
        <img src={send} alt='send' />
      </S.FooterWrapper>
    </S.FooterBox>
  );
};

export default Footer;
