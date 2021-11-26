import React, { useState } from 'react';
import OptionsTemplate from '../../../default/profile/optionsTemplate';
import Footer from '../../../footer';
import Header from '../../../header';
import { written } from '../../../../assets/mypage';
import * as S from './style';
import PostContent from '../../../post/PostContent';

const WrittenPost = () => {
  const [isShow, setIsShow] = useState(true);
  const [isGroup, setIsGroup] = useState(false);

  const setCarrot = () => {
    setIsGroup(false);
  };

  const setGroup = () => {
    setIsGroup(true);
  };

  return (
    <S.Wrapper>
      <Header />
      <OptionsTemplate
        top={440}
        image={written}
        text={'작성한 게시물 보기'}
        setIsShow={setIsShow}
        isShow={isShow}
      />
      {isShow && (
        <S.ListWrapper>
          <S.TypeSelector isGroup={isGroup}>
            <p onClick={setCarrot}>거래</p>
            <p onClick={setGroup}>공구</p>
          </S.TypeSelector>
          <PostContent
            key={1}
            feedId={1}
            medium={''}
            title={'dasdsa'}
            money={1000}
            like={3}
            type={''}
            date={''}
            people={''}
            hashtag={[]}
            isLikeClick={false}
          />
        </S.ListWrapper>
      )}
      <Footer />
    </S.Wrapper>
  );
};

export default WrittenPost;
