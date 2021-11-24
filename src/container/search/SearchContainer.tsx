import React, { FC, Suspense } from 'react';
import Search from '../../components/search';
import useSearch from '../../util/hooks/search';

const SearchContanier: FC = () => {
  const { state, setState } = useSearch();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Search {...state} {...setState} />
    </Suspense>
  );
};

export default SearchContanier;
