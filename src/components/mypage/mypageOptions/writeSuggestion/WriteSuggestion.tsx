import React from 'react';
import { Footer, Header } from '../../..';
import Template from '../../../default/modal/template';
import * as S from './style';

const WriteSuggestion = () => {
  return (
    <S.Wrapper>
      <Header />
      <Template />
      <Footer />
    </S.Wrapper>
  );
};

export default WriteSuggestion;
