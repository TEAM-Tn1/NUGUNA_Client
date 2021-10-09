import { FC } from 'react';
import * as S from './style';
import Sidebar from '../sidebar/index';
import Frame from './frame/index';
import List from './list/index';
import { suggestionIcon } from '../../../assets/defalut';

const testArray: number[] = [];
for (let i = 0; i < 10; i++) {
  testArray.push(i);
}

const Data = {
  report_id: '335',
  title: '문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의',
  user_name: '문의씨',
  created_date: '10/05',
  check: true,
};

const { report_id, title, user_name, created_date, check } = Data;

const Suggestion: FC = () => {
  return (
    <S.Wrapper>
      <Sidebar />
      <S.Main>
        <Frame listTitle='문의사항' imgSrc={suggestionIcon} divType='none' postOp='' userOp='' />
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
                  writer={user_name}
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

export default Suggestion;
