import { useDispatch } from 'react-redux';
import {
  setDate,
  setDescription,
  setHeadCount,
  setPrice,
  setTags,
  setTitle,
} from '../../../modules/action/writePost';
import useSelectState from '../default';

const useWritePost = () => {
  const dispatch = useDispatch();
  const state = useSelectState().writePost;
  const setState = {
    setTitle: (payload: string) => {
      dispatch(setTitle(payload));
    },
    setDescription: (payload: string) => {
      dispatch(setDescription(payload));
    },
    setPrice: (payload: number) => {
      dispatch(setPrice(payload));
    },
    setTags: (payload: Array<string>) => {
      dispatch(setTags(payload));
    },
    setDate: (payload: string) => {
      dispatch(setDate(payload));
    },
    setHeadCount: (payload: number) => {
      dispatch(setHeadCount(payload));
    },
  };
  return { state, setState };
};

export default useWritePost;
