import { FC, useState, useEffect } from 'react';
import { CheckIcon, positive, negative } from '../../../../assets/admin';
import * as S from './style/index';
import { ListDetail } from '../listDetail/index';

interface listProps {
  postId: number | string;
  title: string;
  target: string;
  writer: string;
  date: string;
  check: boolean;
}

const DetailData = {
  description: '내용내용내용내용내용내용내용',
  photo_url: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
};

const { description, photo_url } = DetailData;

const List: FC<listProps> = ({ postId, title, target, writer, date, check }) => {
  const [color, setColor] = useState<string>('');
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
      <ListDetail description={description} photo_url={photo_url} />
    </article>
  );
};

export default List;
