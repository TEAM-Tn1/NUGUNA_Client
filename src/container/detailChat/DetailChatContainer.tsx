import React, { FC, Suspense } from 'react';
import DetailChat from '../../components/detailChat';

interface Props {
  socket: React.MutableRefObject<SocketIOClient.Socket | undefined>;
}

const DetailChatContainer: FC<Props> = props => {
  const { socket } = props;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailChat socket={socket} />
    </Suspense>
  );
};

export default DetailChatContainer;
