import React, { FC, useEffect, useState } from 'react';
import * as S from './style';
import { useLocation, useParams } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import Chats from './Chats';
import { detailChatResponse } from '../../models/dto/response/detailChatResponse';

interface Props {
  page: number;
  chatContent: Array<detailChatResponse>;
  accountNumber: string;
  isHaveNextPage: boolean;
  socket: React.MutableRefObject<SocketIOClient.Socket | undefined>;
  setPage: (payload: number) => void;
  setMessage: (payload: detailChatResponse) => void;
}

const DetailChat: FC<Props> = props => {
  const { socket, setMessage, accountNumber } = props;
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
          <Chats {...props} />
        </S.ContentBox>
      </S.DetailChat>
      <Footer
        id={id}
        accountNumber={accountNumber}
        isClickSettingBtn={isClickSettingBtn}
        setIsClickSettingBtn={setIsClickSettingBtn}
        socket={socket}
        setMessage={setMessage}
      />
    </>
  );
};

export default DetailChat;
