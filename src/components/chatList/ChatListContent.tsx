import React, { FC, useMemo } from 'react';
import { people } from '../../assets/chat';
import * as S from './style';

interface Props {
  roomName: string;
  lastMessage: string;
  photoUrl: string;
  count?: number;
}

const ChatListContent: FC<Props> = props => {
  const { roomName, lastMessage, count, photoUrl } = props;

  const showPeople = useMemo(() => {
    if (count)
      return (
        <S.People>
          <img src={people} alt='people' />
          <p>{count}</p>
        </S.People>
      );
  }, [count]);

  return (
    <S.ChatListContent>
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
