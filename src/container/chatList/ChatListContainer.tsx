import React, { FC, Suspense, useEffect, useRef } from 'react';
import ChatList from '../../components/chatList';
import socketIO from 'socket.io-client';

const ChatListContainer: FC = () => {
  const SOCKET_SEVER_URL = 'https://server.tn1-dsm.com?Authorization=';

  useEffect(() => {
    socketIO.connect(SOCKET_SEVER_URL + localStorage.getItem('access_token'), {
      transports: ['websocket'],
    });
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChatList />
    </Suspense>
  );
};

export default ChatListContainer;
