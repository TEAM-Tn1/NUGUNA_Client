import React, { FC, Suspense } from 'react';
import Search from '../../components/search';

const SearchContanier: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Search />
    </Suspense>
  );
};

export default SearchContanier;
