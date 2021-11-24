import React, { FC, useMemo } from 'react';
import * as S from './style';
import { setting, send } from '../../assets/chat';
import { SETTING } from '../../constance/detailChat';
import { useHistory } from 'react-router';

interface Props {
  id: string;
  isClickSettingBtn: boolean;
  setIsClickSettingBtn: React.Dispatch<React.SetStateAction<boolean>>;
  socket: React.MutableRefObject<SocketIOClient.Socket | undefined>;
}

const Footer: FC<Props> = props => {
  const { setIsClickSettingBtn, isClickSettingBtn, socket, id } = props;
  const history = useHistory();

  const outBtnClickHandler = () => {
    socket.current?.emit('leave', id);
    socket.current?.on('room', () => {
      history.push('/chatting');
    });
  };

  const showSetting = useMemo(() => {
    if (isClickSettingBtn)
      return (
        <S.SettingLine>
          {SETTING.map(data => {
            return (
              <div key={data.id} onClick={data.id === 'out' ? outBtnClickHandler : () => {}}>
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
        <S.ChatInput />
        <img src={send} alt='send' />
      </S.FooterWrapper>
    </S.FooterBox>
  );
};

export default Footer;
