import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from './style';
import { setting, send } from '../../assets/chat';
import { SETTING } from '../../constance/detailChat';
import { useHistory } from 'react-router';
import { detailChatResponse, socketResponse } from '../../models/dto/response/detailChatResponse';
import { useDispatch } from 'react-redux';
import { GET_INFO } from '../../modules/action/detailChat/interface';

interface Props {
  id: string;
  accountNumber: string;
  isClickSettingBtn: boolean;
  socket: React.MutableRefObject<SocketIOClient.Socket | undefined>;
  isSuccessGetInfo: boolean | undefined;
  setIsClickSettingBtn: React.Dispatch<React.SetStateAction<boolean>>;
  setMessage: (payload: detailChatResponse) => void;
}

const Footer: FC<Props> = props => {
  const {
    setIsClickSettingBtn,
    isClickSettingBtn,
    socket,
    id,
    setMessage,
    accountNumber,
    isSuccessGetInfo,
  } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const [chat, setChat] = useState<string>('');
  const input = document.getElementById('input') as HTMLInputElement;

  const outBtnClickHandler = () => {
    socket.current?.emit('leave', id);
    socket.current?.on('room', () => {
      history.push('/chatting');
    });
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChat(event.currentTarget.value);
  };

  const sendBtnClickHandler = () => {
    socket.current?.emit('message', { message: chat, room_id: id });
    socket.current?.on('message', (response: socketResponse) => {
      setMessage({
        message_id: response.message_id,
        message: response.content,
        type: response.type,
        email: response.email,
        name: response.name,
        sent_at: response.sent_at,
      });
      input.value = '';
      socket.current?.off('message');
    });
  };

  const arriveBtnClickHandler = () => {
    socket.current?.emit('message', { message: '택배 도착했습니다!', room_id: id });
    socket.current?.on('message', (response: socketResponse) => {
      setMessage({
        message_id: response.message_id,
        message: response.content,
        type: response.type,
        email: response.email,
        name: response.name,
        sent_at: response.sent_at,
      });
      socket.current?.off('message');
    });
  };

  const accountBtnClickHandler = () => {
    dispatch({ type: GET_INFO });
  };

  useEffect(() => {
    if (isSuccessGetInfo === true) {
      socket.current?.emit('message', { message: accountNumber, room_id: id });
      socket.current?.on('message', (response: socketResponse) => {
        setMessage({
          message_id: response.message_id,
          message: response.content,
          type: response.type,
          email: response.email,
          name: response.name,
          sent_at: response.sent_at,
        });
        socket.current?.off('message');
      });
    }
  }, [isSuccessGetInfo, accountNumber]);

  const showSetting = useMemo(() => {
    if (isClickSettingBtn)
      return (
        <S.SettingLine>
          {SETTING.map(data => {
            return (
              <div
                key={data.id}
                onClick={
                  data.id === 'out'
                    ? outBtnClickHandler
                    : data.id === 'arrive'
                    ? arriveBtnClickHandler
                    : accountBtnClickHandler
                }
              >
                <img src={data.img} alt={data.id} />
                <p>{data.content}</p>
              </div>
            );
          })}
        </S.SettingLine>
      );
  }, [isClickSettingBtn]);

  const settingBtnClickHandler = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    setIsClickSettingBtn(!isClickSettingBtn);
    if (isClickSettingBtn) event.currentTarget.style.transform = 'rotate(0deg)';
    else event.currentTarget.style.transform = 'rotate(45deg)';
  };

  return (
    <S.FooterBox>
      <S.FooterWrapper>
        {showSetting}
        <img src={setting} alt='setting' onClick={settingBtnClickHandler} />
        <S.ChatInput onChange={inputChangeHandler} id='input' />
        <img src={send} alt='send' onClick={sendBtnClickHandler} />
      </S.FooterWrapper>
    </S.FooterBox>
  );
};

export default Footer;
