import React, { FC, Suspense } from 'react';
import WritePost from '../../components/writePost';

const WritePostContanier: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WritePost />
    </Suspense>
  );
};

export default WritePostContanier;
