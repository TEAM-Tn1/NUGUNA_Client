import { detailChatActionType } from '../../action/detailChat';
import {
  CHAT_CONTENT,
  CHAT_CONTENT_FAILURE,
  CHAT_CONTENT_SUCCESS,
  ROOM_ID,
  PAGE,
} from '../../action/detailChat/interface';
import DetailChatState from './interface';

const initState: DetailChatState = {
  chatContent: [],
  page: 0,
  roomId: '',
  error: {
    status: 0,
    type: '',
    message: '',
  },
  isSuccessGetDetailChat: undefined,
};

const detailChatReducer = (
  state: DetailChatState = initState,
  action: detailChatActionType,
): DetailChatState => {
  switch (action.type) {
    case CHAT_CONTENT:
      return {
        ...state,
        isSuccessGetDetailChat: undefined,
      };
    case CHAT_CONTENT_SUCCESS:
      return {
        ...state,
        chatContent: action.payload,
        isSuccessGetDetailChat: true,
      };
    case CHAT_CONTENT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSuccessGetDetailChat: false,
      };
    case ROOM_ID:
      return {
        ...state,
        roomId: action.payload,
      };
    case PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};

export default detailChatReducer;
