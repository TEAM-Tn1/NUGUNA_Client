import React, { FC, Suspense } from 'react';
import DetailPost from '../../components/detailPost';

const DetailPostContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailPost />
    </Suspense>
  );
};

export default DetailPostContainer;
