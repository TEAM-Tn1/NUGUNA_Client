/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react';
import * as S from './style';
import { chat_icon, question_icon, report_icon, tag_icon } from '../../../assets/alarm/index';

interface listProps {
  notification_id: number;
  title: string;
  message: string;
  content: string | number;
  is_watch: boolean;
}

const List: FC<listProps> = ({ title, message, content, is_watch }) => {
  const [icon, setIcon] = useState<string>('');

  useEffect(() => {
    switch (title) {
      case '신고':
        setIcon(report_icon);
        break;
      case '채팅':
        setIcon(chat_icon);
        break;
      case '문의':
        setIcon(question_icon);
        break;
      case '태그':
        setIcon(tag_icon);
        break;
    }
  }, []);
  return (
    <S.List>
      <div>
        <div style={{ backgroundColor: is_watch ? '#3D50FF' : 'transparent' }} />
      </div>
      <div>
        <div>
          <img src={icon} alt='' />
        </div>
        <div>
          <span>{title}</span>
          <p>{message}</p>
        </div>
      </div>
    </S.List>
  );
};

export default List;
