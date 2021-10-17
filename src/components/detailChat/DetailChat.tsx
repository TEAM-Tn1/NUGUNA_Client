import React, { useMemo, useState } from 'react';
import * as S from './style';
import { useLocation } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import Chats from './Chats';

const DetailChat = () => {
  const [isClickSettingBtn, setIsClickSettingBtn] = useState(false);
  const type = useLocation().pathname.slice(6, 11);

  return (
    <>
      <Header type={type} />
      <S.DetailChat>
        <S.ContentBox>
          <Chats />
        </S.ContentBox>
      </S.DetailChat>
      <Footer isClickSettingBtn={isClickSettingBtn} setIsClickSettingBtn={setIsClickSettingBtn} />
    </>
  );
};

export default DetailChat;
