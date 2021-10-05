import React, { FC, useState } from 'react';
import { checkIcon } from '../../../../assets/admin';
import * as S from './style/index';

interface listProps {
  postId: number | string;
  title: string;
  target: string;
  writer: string;
  date: string;
  check: boolean;
}

const List: FC<listProps> = ({ postId, title, target, writer, date, check }) => {
  return (
    <S.List>
      <p>{postId}</p>
      <h3>{title}</h3>
      <div>
        <p>{target}</p>
        <p>{writer}</p>
        <p>{date}</p>
        <div>
          <img src={checkIcon} />
        </div>
      </div>
    </S.List>
  );
};

export default List;
