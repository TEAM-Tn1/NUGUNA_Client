import React, { FC, Suspense } from 'react';
import ChatList from '../../components/chatList';
import useChatList from '../../util/hooks/chatList';

interface Props {
  socket: React.MutableRefObject<SocketIOClient.Socket | undefined>;
}

const ChatListContainer: FC<Props> = props => {
  const { state, setState } = useChatList();
  const { socket } = props;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChatList {...state} {...setState} socket={socket} />
    </Suspense>
  );
};

export default ChatListContainer;
