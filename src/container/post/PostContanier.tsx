/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Post } from '../../components';
import { CARROT_POSTLIST, GROUP_POSTLIST } from '../../modules/action/post/interface';
import usePost from '../../util/hooks/post';

const PostContanier: FC = () => {
  const { state, setState } = usePost();
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.type === 'trade') dispatch({ type: CARROT_POSTLIST });
    else if (state.type === 'group') dispatch({ type: GROUP_POSTLIST });
  }, [state.type, state.page, state.order]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Post {...state} {...setState} />
    </Suspense>
  );
};

export default PostContanier;
