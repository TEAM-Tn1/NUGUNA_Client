import React, { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { UserReport } from '../../../components/admin';
import { REPORT_USER_LIST } from '../../../modules/action/admin/interface';
import { useAdminList } from '../../../util/hooks/admin';

const ReportUserContainer = () => {
  const { state, setState } = useAdminList();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: REPORT_USER_LIST });
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserReport {...state} {...setState} />
    </Suspense>
  );
};

export default ReportUserContainer;
