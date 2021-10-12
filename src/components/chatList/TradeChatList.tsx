import React from 'react';
import * as S from './style';
import { TRADEDUMMY } from '../../constance/chatList';
import ChatListContent from './ChatListContent';

const TradeChatList = () => {
  return (
    <S.ListContent>
      {TRADEDUMMY.map(data => {
        return (
          <ChatListContent
            roomName={data.roomName}
            lastMessage={data.lastMessage}
            photoUrl={data.photoUrl}
            key={data.roomId}
          />
        );
      })}
    </S.ListContent>
  );
};

export default TradeChatList;
