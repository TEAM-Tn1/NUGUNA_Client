import { FC } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import Sidebar from '../sidebar/index';
import List from '../list/index';

// api 명세 작성 되면 정리하기
const LIST = [
  {
    id: '8',
    title: '제목이에용가리 치킨은 마요네즈가 아니라 뭐더라 머스타드',
    target: ',zhzhzh',
    name: '김박박',
    date: '7/6',
  },
  { id: '6', title: 'dfghjkjkljhgfdhsg', target: '호호호', name: '박김', date: '05/05' },
  { id: '5', title: 'oiutyrew', target: 'rlarlarla', name: '조조조', date: '12/5' },
];

interface frameProps {
  title: string;
  imgSrc: string;
  target: string;
  writer: string;
  date: string;
  divType: string;
  postOp: string | number;
  userOp: string | number;
}

const Frame: FC<frameProps> = ({
  title,
  imgSrc,
  target,
  writer,
  date,
  divType,
  postOp,
  userOp,
}) => {
  return (
    <S.Wrapper>
      <Sidebar />
      <S.Main>
        <S.Top>
          <div>
            <img src={imgSrc} />
            <h1>{title}</h1>
          </div>
          <div style={{ display: divType }}>
            <Link to='/admin/report/post'>
              <p style={{ opacity: postOp }}>게시물 신고</p>
            </Link>
            <Link to='/admin/report/user'>
              <p style={{ opacity: userOp }}>유저 신고</p>
            </Link>
          </div>
        </S.Top>
        <S.Chart>
          <S.ChartTitle>
            <p>번호</p>
            <h3>제목</h3>
            <div>
              <p>{target}</p>
              <p>{writer}</p>
              <p>{date}</p>
              <p>확인 여부</p>
            </div>
          </S.ChartTitle>
          <div>
            {LIST.map(ele => {
              return (
                <List
                  key={ele.id}
                  id={ele.id}
                  title={ele.title}
                  target={ele.target}
                  name={ele.name}
                  date={ele.date}
                />
              );
            })}
          </div>
        </S.Chart>
      </S.Main>
    </S.Wrapper>
  );
};

export default Frame;
