import React, { FC, useEffect, useState } from 'react';
import * as S from './style';
import Sidebar from '../sidebar/index';
import Frame from './frame/index';
import List from './list/index';
import { suggestionIcon } from '../../../assets/defalut';
import { ListDetail } from './listDetail/index';
import { useInView } from 'react-intersection-observer';
import { questionResponse } from '../../../models/dto/response/questionResponse';
import { useDispatch } from 'react-redux';
import { QUESTION_LIST } from '../../../modules/action/admin/interface';

interface Props {
  setPage: (payload: number) => void;
  page: number;
  isHaveNextPage: boolean;
  list: questionResponse;
}

const Suggestion: FC<Props> = props => {
  const { setPage, page, isHaveNextPage, list } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const { inView } = useInView();
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    dispatch({ type: QUESTION_LIST });
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

  useEffect(() => {
    if (isHaveNextPage) setLoading(false);
    else setLoading(true);
  }, [isHaveNextPage]);

  const [divDisplayBool, setDivDisplayBool] = useState<boolean>(false);
  const showDetail = () => {
    setDivDisplayBool(!divDisplayBool);
  };

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
          <article>
            {list &&
              list.map((data, index) => {
                return (
                  <article>
                    <List
                      openDetail={showDetail}
                      key={index}
                      postId={data.question_id}
                      title={data.title}
                      target={''}
                      writer={data.user_name}
                      date={data.created_date}
                      check={data.check}
                    />
                    <ListDetail
                      closeDetail={showDetail}
                      key={index}
                      description={''}
                      photo_url={''}
                      option={3}
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

export default Suggestion;
