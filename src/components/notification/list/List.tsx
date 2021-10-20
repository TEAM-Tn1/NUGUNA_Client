import React, { FC, useEffect, useState } from 'react';
import * as S from './style';
import { chat_icon, question_icon, report_icon, tag_icon } from '../../../assets/alarm/index';

interface listProps {
  notification_id: number;
  title: string;
  message: string;
  content: string;
  is_watch: boolean;
}

const List: FC<listProps> = ({ notification_id, title, message, content, is_watch }) => {
  const [icon, setIcon] = useState<string>('report_icon');

  useEffect(() => {
    switch (content) {
      case 'report':
        setIcon(report_icon);
        break;
      case 'chat':
        setIcon(chat_icon);
        break;
      case 'question':
        setIcon(question_icon);
        break;
      case 'tag':
        setIcon(tag_icon);
        break;
    }
  });
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
