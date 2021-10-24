import React, { useState } from 'react';
import * as S from './style';
import Header from '../header';
import Footer from '../footer';
import { SEARCH_TITLE, SUBTITLE } from '../../constance/search';
import PostList from '../post/PostList';

const Search = () => {
  const [isPostClick, setIsPostClick] = useState({ trade: true, group: false });
  const [isOrderClick, setIsOrderClick] = useState({ newest: true, like: false });
  const [type, setType] = useState<string>('trade');

  const subtitleClickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const dataId = event.currentTarget.dataset.id;
    switch (dataId) {
      case 'trade':
        setIsPostClick({ trade: true, group: false });
        setType('trade');
        break;
      case 'group':
        setIsPostClick({ trade: false, group: true });
        setType('group');
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
    <>
      <Header />
      <S.Search>
        <S.ContentBox>
          <S.TitleLine>
            <p>{SEARCH_TITLE}</p>
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
          <PostList type={type} setPage={() => {}} page={1} postList={[]} isHaveNextPage={false} />
        </S.ContentBox>
      </S.Search>
      <Footer />
    </>
  );
};

export default Search;
