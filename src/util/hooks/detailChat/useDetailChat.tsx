import { useDispatch } from 'react-redux';
import { setPage, setRoomId } from '../../../modules/action/detailChat';
import useSelectState from '../default';

const useDetailChat = () => {
  const dispatch = useDispatch();
  const state = useSelectState().detailChat;
  const setState = {
    setPage: (payload: number) => {
      dispatch(setPage(payload));
    },
    setRoomId: (payload: string) => {
      dispatch(setRoomId(payload));
    },
  };
  return { state, setState };
};

export default useDetailChat;
