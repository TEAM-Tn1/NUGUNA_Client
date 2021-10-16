import React from 'react';
import * as S from './style';
import Header from './Header';
import Footer from './Footer';
import { SETTING } from '../../constance/detailChat';

const DetailChat = () => {
  return (
    <>
      <Header />
      <S.DetailChat>
        <S.ContentBox>
          <S.SettingLine>
            {SETTING.map(data => {
              return (
                <div key={data.id}>
                  <img src={data.img} />
                  <p>{data.content}</p>
                </div>
              );
            })}
          </S.SettingLine>
        </S.ContentBox>
      </S.DetailChat>
      <Footer />
    </>
  );
};

export default DetailChat;
