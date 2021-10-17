import React, { FC, Suspense } from 'react';
import DetailChat from '../../components/detailChat';

const DetailChatContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailChat />
    </Suspense>
  );
};

export default DetailChatContainer;
