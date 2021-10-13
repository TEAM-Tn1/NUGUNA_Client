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
          <div>
            <p>내용내용내용내용내용내용내용</p>
            <img
              src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
              alt=''
            />
          </div>
        </S.Content>
        <hr />
        <S.Answer>
          <div>
            <p>유저 비활성화 여부</p>
            <img src={positive} alt='' />
            <input type='date' />
          </div>
          <textarea placeholder='답변을 남겨주세요.' />
          <div>
            <button>확인</button>
          </div>
        </S.Answer>
      </S.Detail>
    </article>
  );
};

export default List;
