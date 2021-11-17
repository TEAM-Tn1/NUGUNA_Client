import React, { FC, Suspense } from 'react';
import WritePost from '../../components/writePost';
import useWritePost from '../../util/hooks/writePost';

const WritePostContanier: FC = () => {
  const { state, setState } = useWritePost();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WritePost {...state} {...setState} />
    </Suspense>
  );
};

export default WritePostContanier;
