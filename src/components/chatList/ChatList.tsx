import React, { useMemo, useState } from 'react';
import * as S from './style';
import Header from '../header';
import Footer from '../footer';
import { ALRAMTITLE, GROUPTOGGLE, TRADETOGGLE } from '../../constance/chatList';
import { bellRing } from '../../assets/chat';
import TradeChatList from './TradeChatList';
import GroupChatList from './GroupChatList';

const ChatList = () => {
  const [isClick, setIsClick] = useState({ trade: true, group: false });

  const tradeBtnClickEvent = () => {
    setIsClick({ trade: true, group: false });
  };

  const groupBtnClickEvent = () => {
    setIsClick({ trade: false, group: true });
  };

  const chatLists = useMemo(() => {
    if (isClick.trade) return <TradeChatList />;
    else if (isClick.group) return <GroupChatList />;
  }, [isClick]);

  return (
    <>
      <Header />
      <S.ChatList>
        <S.AlarmLine>
          <p>{ALRAMTITLE}</p>
          <img src={bellRing} alt='bell' />
        </S.AlarmLine>
        <S.ToggleLine>
          <S.ToggleBtn isClick={isClick.trade} onClick={tradeBtnClickEvent}>
            <p>{TRADETOGGLE}</p>
          </S.ToggleBtn>
          <S.ToggleBtn isClick={isClick.group} onClick={groupBtnClickEvent}>
            <p>{GROUPTOGGLE}</p>
          </S.ToggleBtn>
        </S.ToggleLine>
        {chatLists}
      </S.ChatList>
      <Footer />
    </>
  );
};

export default ChatList;
