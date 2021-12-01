import React, { FC, useEffect, useState } from 'react';
import * as S from './style';
import { useLocation, useParams } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import Chats from './Chats';
import { detailChatResponse } from '../../models/dto/response/detailChatResponse';
import { useDispatch } from 'react-redux';
import { GET_CHAT_INFO } from '../../modules/action/detailChat/interface';

interface Props {
  page: number;
  chatContent: Array<detailChatResponse>;
  accountNumber: string;
  roomName: string;
  count: number;
  isHaveNextPage: boolean;
  socket: React.MutableRefObject<SocketIOClient.Socket | undefined>;
  isSuccessGetInfo: boolean | undefined;
  setPage: (payload: number) => void;
  setMessage: (payload: detailChatResponse) => void;
  setRoomId: (payload: string) => void;
}

const DetailChat: FC<Props> = props => {
  const { socket, setRoomId } = props;
  const [isClickSettingBtn, setIsClickSettingBtn] = useState(false);
  const type = useLocation().pathname.slice(6, 11);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  useEffect(() => {
    setRoomId(id);
    socket.current?.emit('subscribe', id);
    dispatch({ type: GET_CHAT_INFO });
  }, []);

  return (
    <>
      <Header type={type} id={id} {...props} />
      <S.DetailChat>
        <S.ContentBox>
          <Chats {...props} />
        </S.ContentBox>
      </S.DetailChat>
      <Footer
        id={id}
        isClickSettingBtn={isClickSettingBtn}
        setIsClickSettingBtn={setIsClickSettingBtn}
        {...props}
      />
    </>
  );
};

export default DetailChat;
