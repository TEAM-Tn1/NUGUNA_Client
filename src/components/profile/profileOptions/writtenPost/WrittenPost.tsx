import React, { useState } from 'react';
import OptionsTemplate from '../../../default/profile';
import Footer from '../../../footer';
import Header from '../../../header';
import { written } from '../../../../assets/profile';
import * as S from './style';

const LikedPost = () => {
  const [isShow, setIsShow] = useState(true);
  return (
    <S.Wrapper>
      <Header />
      <OptionsTemplate
        top={540}
        image={written}
        text={'작성한 게시물 보기'}
        setIsShow={setIsShow}
        isShow={isShow}
      />
      <Footer />
    </S.Wrapper>
  );
};

export default LikedPost;
