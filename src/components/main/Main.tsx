import React, { useEffect, useState } from 'react';
import * as S from './style';
import { Header, Footer } from '..';
import { Logo } from '../logo';
import PostContent from '../post/PostContent';
import { Link } from 'react-router-dom';
import carrotGet from '../../util/api/main';
import grouptGet from '../../util/api/main';

const Main = () => {
  const accessToken = localStorage.getItem('access_token');
  const array = ['1', '2'];
  const [carrot, setCarrot] = useState<any>();
  const [group, setGroup] = useState<any>();

  useEffect(() => {
    {
      carrotGet
        .setCarrotGet(accessToken)
        .then(res => {
          console.log(res.data);
          setCarrot(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
    {
      grouptGet
        .setGroupGet(accessToken)
        .then(res => {
          console.log(res.data);
          setGroup(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, []);

  console.log(group);
  return (
    <S.Wrapper>
      <Header />
      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>
      <S.PostInfo>
        <div>
          <h1>거래게시물</h1>
        </div>
        {carrot &&
          carrot.map((carrot: any) => {
            return (
              <PostContent
                feedId={carrot.feed_id}
                medium={carrot.medium}
                title={carrot.title}
                money={carrot.price}
                like={carrot.count}
                type={''}
                date={''}
                people={''}
                hashtag={carrot.tags}
                isLikeClick={carrot.like}
              />
            );
          })}
        <div>
          <Link to={'/post'}>
            <span>게시물 더보기 ＞</span>
          </Link>
        </div>
      </S.PostInfo>
      <S.PostInfo>
        <div>
          <h1>공구게시물</h1>
        </div>
        {group &&
          group.map((group: any) => {
            return (
              <PostContent
                feedId={group.feed_id}
                medium={group.medium}
                title={group.title}
                money={group.price}
                like={group.count}
                type={''}
                date={''}
                people={''}
                hashtag={group.tags}
                isLikeClick={group.like}
              />
            );
          })}
        <div>
          <Link to={'/post'}>
            <span>게시물 더보기 ＞</span>
          </Link>
        </div>
      </S.PostInfo>
      <Footer />
    </S.Wrapper>
  );
};

export default Main;
