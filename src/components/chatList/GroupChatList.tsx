import React from 'react';
import * as S from './style';
import { GROUPDUMMY } from '../../constance/chatList';
import ChatListContent from './ChatListContent';

const GroupChatList = () => {
  return (
    <S.ListContent>
      {GROUPDUMMY.map(data => {
        return (
          <ChatListContent
            roomName={data.roomName}
            lastMessage={data.lastMessage}
            photoUrl={data.photoUrl}
            key={data.roomId}
            count={data.count}
          />
        );
      })}
    </S.ListContent>
  );
};

export default GroupChatList;
