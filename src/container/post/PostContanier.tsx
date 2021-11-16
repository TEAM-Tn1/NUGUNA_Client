/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Post } from '../../components';
import { GET_POST } from '../../modules/action/post/interface';
import usePost from '../../util/hooks/post';

const PostContanier: FC = () => {
  const { state, setState } = usePost();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_POST });
  }, [state.type, state.page, state.order]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Post {...state} {...setState} />
    </Suspense>
  );
};

export default PostContanier;
