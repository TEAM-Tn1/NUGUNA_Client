import React, { FC, useState } from 'react';
import { checkIcon } from '../../../../assets/admin';
import * as S from './style/index';

interface listProps {
  id: number | string;
  title: string;
  target: string;
  name: string;
  date: string;
}

const List: FC<listProps> = ({ id, title, target, name, date }) => {
  return (
    <S.List>
      <p>{id}</p>
      <h3>{title}</h3>
      <div>
        <p>{target}</p>
        <p>{name}</p>
        <p>{date}</p>
        <div>
          <img src={checkIcon} />
        </div>
      </div>
    </S.List>
  );
};

export default List;
