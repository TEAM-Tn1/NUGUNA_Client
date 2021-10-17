import React, { FC, useMemo } from 'react';
import * as S from './style';
import { prev } from '../../assets/chat';

interface Props {
  type: string;
}

const Header: FC<Props> = props => {
  const { type } = props;

  const people = useMemo(() => {
    if (type === 'group') return <span>4</span>;
    else return;
  }, [type]);

  return (
    <S.Header>
      <S.HeaderWrapper>
        <img src={prev} alt='prev' />
        <p>일이삼사오육칠팔구십</p>
        {people}
      </S.HeaderWrapper>
    </S.Header>
  );
};

export default Header;
