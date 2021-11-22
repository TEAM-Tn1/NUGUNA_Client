import React, { FC, useMemo } from 'react';
import { useHistory } from 'react-router';
import { people } from '../../assets/chat';
import * as S from './style';

interface Props {
  roomName: string;
  lastMessage: string;
  photoUrl: string;
  roomId: number;
  count?: number;
  type: string;
}

const ChatListContent: FC<Props> = props => {
  const { roomName, lastMessage, count, photoUrl, roomId, type } = props;
  const history = useHistory();

  const showPeople = useMemo(() => {
    if (count)
      return (
        <S.People>
          <img src={people} alt='people' />
          <p>{count}</p>
        </S.People>
      );
  }, [count]);

  const chatListClickHandler = () => {
    if (type === 'trade') history.push(`/chat/trade/${roomId}`);
    else if (type === 'group') history.push(`/chat/group/${roomId}`);
  };

  return (
    <S.ChatListContent onClick={chatListClickHandler}>
      <S.ChatImg src={photoUrl} />
      <div>
        {showPeople}
        <S.ChatTitle>{roomName}</S.ChatTitle>
        <S.ChatContent>{lastMessage}</S.ChatContent>
      </div>
    </S.ChatListContent>
  );
};

export default ChatListContent;
