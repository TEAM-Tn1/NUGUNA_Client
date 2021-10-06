import React, { FC, Suspense } from 'react';
import { Post } from '../../components';

const PostContanier: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Post />
    </Suspense>
  );
};

export default PostContanier;
