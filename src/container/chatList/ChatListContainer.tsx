import React, { FC, Suspense } from 'react';
import ChatList from '../../components/chatList';

const ChatListContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChatList />
    </Suspense>
  );
};

export default ChatListContainer;
