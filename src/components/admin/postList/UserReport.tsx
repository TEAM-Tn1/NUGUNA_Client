import React, { FC, useEffect, useState } from 'react';
import * as S from './style';
import Sidebar from '../sidebar/index';
import Frame from './frame/index';
import List from './list/index';
import { reportIcon } from '../../../assets/defalut';
import { ListDetail } from './listDetail/index';
import { reportUserResponse } from '../../../models/dto/response/reportUserResponse';
import { useInView } from 'react-intersection-observer';
import { REPORT_USER_LIST } from '../../../modules/action/admin/interface';
import { useDispatch } from 'react-redux';

interface Props {
  setPage: (payload: number) => void;
  page: number;
  isHaveNextPage: boolean;
  list: reportUserResponse;
}

const UserReport: FC<Props> = props => {
  const { setPage, page, isHaveNextPage, list } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const { inView } = useInView();
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    dispatch({ type: REPORT_USER_LIST });
  });

  /*   useEffect(() => {
    console.log(list);
    if (list.length !== 0) {
      if (inView && !loading) {
        setLoading(true);
        if (list !== []) {
          setPage(page + 1);
        }
      }
    }
  }, [inView]); */

  const [divDisplayBool, setDivDisplayBool] = useState<boolean>(false);

  const showDetail = () => {
    setDivDisplayBool(!divDisplayBool);
  };

  return (
    <S.Wrapper>
      <Sidebar />
      <S.Main>
        <Frame listTitle='신고사항' imgSrc={reportIcon} divType='flex' postOp='0.5' userOp='1' />
        <S.Chart>
          <S.ChartTitle>
            <p>번호</p>
            <h3>제목</h3>
            <div>
              <p>대상자</p>
              <p>신고자</p>
              <p>신고일</p>
              <p>확인 여부</p>
            </div>
          </S.ChartTitle>
          <article>
            {list &&
              list.map((data, index) => {
                return (
                  <article>
                    <List
                      openDetail={showDetail}
                      key={index}
                      postId={data.report_id}
                      title={data.title}
                      target={data.defendant_name}
                      writer={data.reporter_name}
                      date={data.created_date}
                      check={data.check}
                    ></List>
                    <ListDetail
                      closeDetail={showDetail}
                      key={index - index}
                      description={'description'}
                      photo_url={'photo_url'}
                      option={1}
                      styles={divDisplayBool}
                    />
                  </article>
                );
              })}
          </article>
        </S.Chart>
      </S.Main>
    </S.Wrapper>
  );
};

export default UserReport;
