import React from 'react';
import * as S from './style';
import Sidebar from './sidebar/index';
import List from './list/index';
import { reportIcon } from '../../assets/defalut';

const LIST = [
  { id: '8', title: 'asdfasdf', target: '', name: '김박박', date: '7/6' },
  { id: '6', title: 'dfghjkjkljhgfdhsg', target: '', name: '박김', date: '05/05' },
  { id: '5', title: 'oiutyrew', target: '', name: '조조조', date: '12/5' },
];

const PostReport = () => {
  return (
    <S.Wrapper>
      <Sidebar />
      <S.Main>
        <S.Top>
          <div>
            <img src={reportIcon} />
            <h1>신고상황</h1>
          </div>
          <div>
            <p>게시물 신고</p>
            <p style={{ opacity: 0.5 }}>유저 신고</p>
          </div>
        </S.Top>
        <S.Chart>
          <S.ChartTitle>
            <p>번호</p>
            <h3>제목</h3>
            <div>
              <p></p>
              <p>신고자</p>
              <p>신고일</p>
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

export default PostReport;
