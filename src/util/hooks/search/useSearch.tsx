import { useDispatch } from 'react-redux';
import useSelectState from '../default';
import { setType, setPage, setTypeClick, setTitle } from '../../../modules/action/search';

const useSearch = () => {
  const dispatch = useDispatch();
  const state = useSelectState().search;
  const setState = {
    setType: (payload: string) => {
      dispatch(setType(payload));
    },
    setTypeClick: (payload: { trade: boolean; group: boolean }) => {
      dispatch(setTypeClick(payload));
    },
    setPage: (payload: number) => {
      dispatch(setPage(payload));
    },
    setTitle: (payload: string) => {
      dispatch(setTitle(payload));
    },
  };
  return { state, setState };
};

export default useSearch;
