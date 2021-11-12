import { useDispatch } from 'react-redux';
import { setPage } from '../../../modules/action/admin';
import useSelectState from '../default';

const useAdminReportPostList = () => {
  const dispatch = useDispatch();
  const state = useSelectState().adminReportPostList;
  const setState = {
    setPage: (payload: number) => {
      dispatch(setPage(payload));
    },
  };
  return { state, setState };
};

export default useAdminReportPostList;
