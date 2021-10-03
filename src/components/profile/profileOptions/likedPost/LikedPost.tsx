import React, { useState } from 'react';
import OptionsTemplate from '../../../default/profile';
import Footer from '../../../footer';
import Header from '../../../header';
import { like } from '../../../../assets/profile';
import * as S from './style';

const LikedPost = () => {
  const [isShow, setIsShow] = useState(true);
  return (
    <S.Wrapper>
      <Header />
      <OptionsTemplate
        top={'380px'}
        image={like}
        text={'좋아요 표시한 게시물 보기'}
        setIsShow={setIsShow}
        isShow={isShow}
      />
      <Footer />
    </S.Wrapper>
  );
};

export default LikedPost;