import React, { useEffect, useState } from 'react';
import * as S from './style';
import { Header, Footer } from '..';
import { Logo } from '../logo';
import PostContent from '../post/PostContent';
import { Link } from 'react-router-dom';
import carrotGet from '../../util/api/main';

const Main = () => {
  const accessToken = localStorage.getItem('access_token');
  const array = ['1', '2'];
  const [carrot, setCarrot] = useState<any>();

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
  }, []);

  console.log(carrot);
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
                //, , , , , , , isLikeClick, ,
                feedId={carrot.feed_id}
                medium={carrot.medium}
                title={carrot.title}
                money={carrot.price}
                like={carrot.like}
                type={''}
                date={''}
                people={''}
                hashtag={carrot.tags}
                isLikeClick={undefined}
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
        {array.map(() => {
          return (
            <PostContent
              feedId={1}
              medium={''}
              title={'귀여운 인형 팔아요yoy'}
              money={5000}
              like={5}
              type={'group'}
              date={'8/1'}
              people={'2/4'}
              hashtag={['#인형', '#인형', '#인형']}
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
