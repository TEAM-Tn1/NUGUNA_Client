import React from 'react';
import { footerMain, footerPost, footerChatting, footerProfile } from '../../assets/footer';
import { FOOTER_TEXT } from '../../constance/footer';
import * as S from './style';

const Footer = () => {
  const imaArray = [footerMain, footerPost, footerChatting, footerProfile];

  return (
    <S.Wrapper>
      <S.FooterTab to='/'>
        <S.TabImage />
        <S.TabText>{}</S.TabText>
      </S.FooterTab>
    </S.Wrapper>
  );
};

export default Footer;
