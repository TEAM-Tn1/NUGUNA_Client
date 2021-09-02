import React from 'react';
import { FOOTER_TEXT } from '../../constance/footer';
import * as S from './style';

const Footer = () => {
  return (
    <S.Wrapper>
      {FOOTER_TEXT.map(ele => {
        return (
          <S.FooterTab to={ele.url} activeStyle={{ opacity: 1 }}>
            <S.ImageWrapper>
              <S.TabImage src={ele.img} />
            </S.ImageWrapper>
            <S.TabText key={ele.id}>{ele.text}</S.TabText>
          </S.FooterTab>
        );
      })}
    </S.Wrapper>
  );
};

export default Footer;
