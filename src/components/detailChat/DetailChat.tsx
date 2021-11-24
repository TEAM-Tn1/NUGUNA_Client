import React, { FC, useEffect, useState } from 'react';
import * as S from './style';
import { useLocation, useParams } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import Chats from './Chats';

interface Props {
  socket: React.MutableRefObject<SocketIOClient.Socket | undefined>;
}

const DetailChat: FC<Props> = props => {
  const { socket } = props;
  const [isClickSettingBtn, setIsClickSettingBtn] = useState(false);
  const type = useLocation().pathname.slice(6, 11);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    socket.current?.emit('subscribe', id);
  }, []);

  return (
    <>
      <Header socket={socket} type={type} id={id} />
      <S.DetailChat>
        <S.ContentBox>
          <Chats />
        </S.ContentBox>
      </S.DetailChat>
      <Footer
        id={id}
        isClickSettingBtn={isClickSettingBtn}
        setIsClickSettingBtn={setIsClickSettingBtn}
        socket={socket}
      />
    </>
  );
};

export default DetailChat;
