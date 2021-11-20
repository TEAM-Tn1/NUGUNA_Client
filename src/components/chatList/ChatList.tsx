import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from './style';
import Header from '../header';
import Footer from '../footer';
import { ALRAMTITLE, GROUPTOGGLE, TRADETOGGLE } from '../../constance/chatList';
import { bellRing } from '../../assets/chat';
import TradeChatList from './TradeChatList';
import GroupChatList from './GroupChatList';
import { useDispatch } from 'react-redux';
import { CARROT_CHAT } from '../../modules/action/chatList/interface';
import { chatListResponseType } from '../../models/dto/response/chatListResponse';

interface Props {
  chatList: Array<chatListResponseType>;
}

const ChatList: FC<Props> = props => {
  const [isClick, setIsClick] = useState({ trade: true, group: false });
  const { chatList } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: CARROT_CHAT });
  }, []);

  const tradeBtnClickEvent = () => {
    setIsClick({ trade: true, group: false });
    dispatch({ type: CARROT_CHAT });
  };

  const groupBtnClickEvent = () => {
    setIsClick({ trade: false, group: true });
  };

  const chatLists = useMemo(() => {
    if (isClick.trade) return <TradeChatList chatList={chatList} />;
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
