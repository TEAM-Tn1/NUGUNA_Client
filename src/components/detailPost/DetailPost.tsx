import React from 'react';
import * as S from './style';
import Header from '../header';
import Footer from '../footer';

const DetailPost = () => {
  return (
    <S.DetailPost>
      <Header />
      <S.ContentBox></S.ContentBox>
      <Footer />
    </S.DetailPost>
  );
};

export default DetailPost;
