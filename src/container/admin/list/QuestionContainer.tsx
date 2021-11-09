import { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Suggestion } from '../../../components/admin';
import { useAdminList } from '../../../util/hooks/admin';

const QuestionContainer: FC = () => {
  const { state, setState } = useAdminList();
  const dispatch = useDispatch();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Suggestion {...state} {...setState} />
    </Suspense>
  );
};

export default QuestionContainer;
