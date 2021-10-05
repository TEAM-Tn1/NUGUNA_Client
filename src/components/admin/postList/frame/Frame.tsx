import { FC } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import Sidebar from '../../sidebar/index';
import List from '../list/index';

interface frameProps {
  listTitle: string;
  imgSrc: string;
  listTarget: string;
  listWriter: string;
  listDate: string;
  divType: string;
  postOp: string | number;
  userOp: string | number;
  Data: any;
}

const testArray:number[] = [];
for(let i = 0; i< 10; i++) {
  testArray.push(i)
}

const Frame: FC<frameProps> = ({
  listTitle,
  imgSrc,
  listTarget,
  listWriter,
  listDate,
  divType,
  postOp,
  userOp,
  Data,
}) => {
  return (
    <S.Wrapper>
      <Sidebar />
      <S.Main>
        <S.Top>
          <div>
            <img src={imgSrc} />
            <h1>{listTitle}</h1>
          </div>
          <div style={{ display: divType }}>
            <Link to='/admin/report/feed'>
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
              <p>{listTarget}</p>
              <p>{listWriter}</p>
              <p>{listDate}</p>
              <p>확인 여부</p>
            </div>
          </S.ChartTitle>
          <div>
            {testArray.map((_, index) => {
              return (
                <List
                  key={index}
                  postId={Data.listId}
                  title={Data.title}
                  target={Data.target}
                  writer={Data.writer}
                  date={Data.date}
                  check={Data.check}
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
