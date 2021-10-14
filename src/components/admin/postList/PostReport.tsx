import { FC } from 'react';
import * as S from './style';
import Sidebar from '../sidebar/index';
import Frame from './frame/index';
import List from './list/index';
import { reportIcon } from '../../../assets/defalut';

//더미데이터
const testArray: number[] = [];
for (let i = 0; i < 10; i++) {
  testArray.push(i);
}

const Data = {
  report_id: '335',
  title: '게시물신고게시물신고게시물신고게시물신고게시물신고게시물신고',
  reporter_name: '게시물',
  created_date: '10/05',
  check: true,
};

const { report_id, title, reporter_name, created_date, check } = Data;

const PostReport: FC = () => {
  return (
    <S.Wrapper>
      <Sidebar />
      <S.Main>
        <Frame listTitle='신고사항' imgSrc={reportIcon} divType='flex' postOp='1' userOp='0.5' />
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
            {testArray.map((_, index) => {
              return (
                <List
                  key={index}
                  postId={report_id}
                  title={title}
                  target={''}
                  writer={reporter_name}
                  date={created_date}
                  check={check}
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
