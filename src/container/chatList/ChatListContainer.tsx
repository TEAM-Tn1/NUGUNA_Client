import React, { FC, Suspense, useEffect } from 'react';
import ChatList from '../../components/chatList';
import socketIO from 'socket.io-client';
import useChatList from '../../util/hooks/chatList';

const ChatListContainer: FC = () => {
  const { state, setState } = useChatList();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChatList {...state} {...setState} />
    </Suspense>
  );
};

export default ChatListContainer;
