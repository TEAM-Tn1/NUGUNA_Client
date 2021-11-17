import { useDispatch } from 'react-redux';
import { saveFeedId } from '../../../modules/action/detailPost';
import useSelectState from '../default';

const useDetailPost = () => {
  const dispatch = useDispatch();
  const state = useSelectState().detailPost;
  const setState = {
    setFeedId: (payload: number) => {
      dispatch(saveFeedId(payload));
    },
  };
  return { state, setState };
};

export default useDetailPost;
