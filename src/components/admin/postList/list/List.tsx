import { FC, useState, useEffect } from 'react';
import { CheckIcon, positive, negative } from '../../../../assets/admin';
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
  const [color, setColor] = useState('');
  useEffect(() => {
    check ? setColor('#00C02A') : setColor('#808080');
  }, []);

  return (
    <article>
      <S.MainContest>
        <p>{postId}</p>
        <h3>{title}</h3>
        <div>
          <p>{target}</p>
          <p>{writer}</p>
          <p>{date}</p>
          <div>
            <CheckIcon color={color} />
          </div>
        </div>
      </S.MainContest>
      <S.Detail>
        <S.Content>
          <span>내용</span>
          <p>
            내용내용내용내용내용내용내용
          </p>
        </S.Content>
      </S.Detail>
    </article>
  );
};

export default List;
