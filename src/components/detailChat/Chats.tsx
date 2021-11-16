import React, { FC } from 'react';
import * as S from './style';
import OtherChat from './OtherChat';
import MyChat from './MyChat';

interface Props {}

const Chats: FC<Props> = props => {
  return (
    <S.Chats>
      <OtherChat isLastMessage message='인형 상태 어때요??' />
      <MyChat message='총 6개 올걸요??' />
      <MyChat isLastMessage message='진짜 부럽다 따봉 두 개' />
      <OtherChat message='인형 상태 어때요??' />
      <OtherChat message='여기에 내 친구만 2명인데 인원 아직도 모자름ㅠㅠㅠ' />
      <OtherChat message='인형 상태 어때요??' />
      <OtherChat message='인형 상태 어때요??' />
      <OtherChat message='인형 상태 어때요??' />
      <OtherChat message='인형 상태 어때요??' />
      <OtherChat message='인형 상태 어때요??' />
      <OtherChat isLastMessage message='인형 상태 어때요??' />
      <MyChat message='나쁘지 않아요 굳굳' />
      <MyChat message='나쁘지 않아요 굳굳' />
      <MyChat message='나쁘지 않아요 굳굳' />
      <MyChat message='나쁘지 않아요 굳굳' />
      <MyChat message='나쁘지 않아요 굳굳' />
      <MyChat message='나쁘지 않아요 굳굳' />
      <MyChat message='나쁘지 않아요 굳굳' />
      <MyChat isLastMessage message='마지막' />
    </S.Chats>
  );
};

export default Chats;
