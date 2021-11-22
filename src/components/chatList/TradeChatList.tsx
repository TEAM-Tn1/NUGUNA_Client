import React, { FC } from 'react';
import * as S from './style';
import ChatListContent from './ChatListContent';
import { chatListResponseType } from '../../models/dto/response/chatListResponse';

interface Props {
  chatList: Array<chatListResponseType>;
}

const TradeChatList: FC<Props> = props => {
  const { chatList } = props;

  return (
    <S.ListContent>
      {chatList.length === 0 && <S.NoChatList>채팅이 없습니다.</S.NoChatList>}
      {chatList &&
        chatList.map(data => {
          return (
            <ChatListContent
              roomName={data.room_name}
              lastMessage={data.last_message}
              photoUrl={data.photo_url}
              key={data.room_id}
              roomId={data.room_id}
              type={'trade'}
            />
          );
        })}
    </S.ListContent>
  );
};

export default TradeChatList;
