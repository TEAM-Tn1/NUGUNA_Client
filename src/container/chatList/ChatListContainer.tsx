import React, { FC, Suspense, useEffect, useRef } from 'react';
import ChatList from '../../components/chatList';
import socketIO from 'socket.io-client';
import useChatList from '../../util/hooks/chatList';

const ChatListContainer: FC = () => {
  const { state, setState } = useChatList();
  const SOCKET_SEVER_URL = 'https://server.tn1-dsm.com?Authorization=';

  useEffect(() => {
    socketIO.connect(SOCKET_SEVER_URL + localStorage.getItem('access_token'), {
      transports: ['websocket'],
    });
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChatList {...state} {...setState} />
    </Suspense>
  );
};

export default ChatListContainer;
