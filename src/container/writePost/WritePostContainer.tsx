import React, { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import WritePost from '../../components/writePost';
import { POST_CONTENT } from '../../modules/action/writePost/interface';
import useWritePost from '../../util/hooks/writePost';

const WritePostContanier: FC = () => {
  const { state, setState } = useWritePost();
  const history = useHistory();
  const dispatch = useDispatch();
  const feedId = localStorage.getItem('feed_id') as string;

  useEffect(() => {
    if (state.error.status === 401 || state.error.status === 403) {
      alert('로그인이 필요합니다');
      history.push('/auth');
    }
  }, [state.error]);

  useEffect(() => {
    setState.setFeedId(Number(feedId));
    dispatch({ type: POST_CONTENT });
  }, [feedId]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WritePost {...state} {...setState} />
    </Suspense>
  );
};

export default WritePostContanier;
