import React, { FC, useState } from 'react';
import * as S from './style';
import Header from '../header';
import Footer from '../footer';
import { POST_TITLE, SUBTITLE } from '../../constance/post';
import PostList from './PostList';

interface Props {}

const Post: FC<Props> = () => {
  const [isPostClick, setIsPostClick] = useState({ trade: true, group: false });
  const [isOrderClick, setIsOrderClick] = useState({ newest: true, like: false });

  const subtitleClickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const dataId = event.currentTarget.dataset.id;
    switch (dataId) {
      case 'trade':
        setIsPostClick({ trade: true, group: false });
        break;
      case 'group':
        setIsPostClick({ trade: false, group: true });
        break;
      case 'newest':
        setIsOrderClick({ newest: true, like: false });
        break;
      case 'like':
        setIsOrderClick({ newest: false, like: true });
        break;
    }
  };

  const clickState = (dataId: string) => {
    switch (dataId) {
      case 'trade':
        return isPostClick.trade;
      case 'group':
        return isPostClick.group;
      case 'newest':
        return isOrderClick.newest;
      case 'like':
        return isOrderClick.like;
    }
  };

  return (
    <S.Post>
      <Header />
      <S.ContentBox>
        <S.TitleLine>
          <p>{POST_TITLE}</p>
          {SUBTITLE.map(data => {
            return (
              <S.SubTitle
                key={data.id}
                data-id={data.id}
                onClick={subtitleClickHandler}
                isClick={clickState(data.id)}
              >
                {data.content}
              </S.SubTitle>
            );
          })}
        </S.TitleLine>
        <PostList />
      </S.ContentBox>
      <Footer />
    </S.Post>
  );
};

export default Post;
