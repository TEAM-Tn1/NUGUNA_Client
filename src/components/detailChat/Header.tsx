import React, { FC, useMemo } from 'react';
import * as S from './style';
import { prev } from '../../assets/chat';
import { useHistory } from 'react-router';

interface Props {
  type: string;
  socket: React.MutableRefObject<SocketIOClient.Socket | undefined>;
}

const Header: FC<Props> = props => {
  const { type, socket } = props;
  const history = useHistory();

  const people = useMemo(() => {
    if (type === 'group') return <span>4</span>;
    else return;
  }, [type]);

  const prevBtnClickHandler = () => {
    history.push('/chatting');
  };

  return (
    <S.Header>
      <S.HeaderWrapper>
        <img src={prev} alt='prev' onClick={prevBtnClickHandler} />
        <p>일이삼사오육칠팔구십</p>
        {people}
      </S.HeaderWrapper>
    </S.Header>
  );
};

export default Header;
