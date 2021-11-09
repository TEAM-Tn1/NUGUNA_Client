import { useDispatch } from 'react-redux';
import { setPage } from '../../../modules/action/post';
import useSelectState from '../default';

const useAdminList = () => {
  const dispatch = useDispatch();
  const state = useSelectState().adminList;
  const setState = {
    setPage: (payload: number) => {
      dispatch(setPage(payload));
    },
  };
  return { state, setState };
};

export default useAdminList;