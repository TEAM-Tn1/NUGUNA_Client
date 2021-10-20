import React, { FC, useEffect } from 'react';
import queryString from 'query-string';
import { Footer, Header } from '..';
import * as S from './style';
import callback from '../../util/api/callback';

const Callback = ({ location }: any) => {
  const query = queryString.parse(location.search);
  const { code } = query;

  useEffect(() => {
    code &&
      callback
        .auth(code)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
  }, []);

  return (
    <S.Wrapper>
      <Header />
      <Footer />
    </S.Wrapper>
  );
};

export default Callback;
