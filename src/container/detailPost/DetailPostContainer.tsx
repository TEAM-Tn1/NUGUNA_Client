import React, { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import DetailPost from '../../components/detailPost';
import { GET_POST } from '../../modules/action/detailPost/interface';
import useDetailPost from '../../util/hooks/detailPost';

const DetailPostContainer: FC = () => {
  const { state, setState } = useDetailPost();
  const feedId = Number(useLocation().pathname.slice(11));
  const dispatch = useDispatch();

  useEffect(() => {
    setState.setFeedId(feedId);
    localStorage.setItem('feed_id', String(feedId));
    dispatch({ type: GET_POST });
  }, [feedId]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailPost {...state} {...setState} />
    </Suspense>
  );
};

export default DetailPostContainer;
