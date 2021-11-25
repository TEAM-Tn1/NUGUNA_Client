import { detailChatActionType } from '../../action/detailChat';
import {
  CHAT_CONTENT,
  CHAT_CONTENT_FAILURE,
  CHAT_CONTENT_SUCCESS,
  ROOM_ID,
  PAGE,
  MESSAGE,
  GET_INFO_SUCCESS,
  GET_INFO_FAILURE,
} from '../../action/detailChat/interface';
import DetailChatState from './interface';

const initState: DetailChatState = {
  chatContent: [],
  page: 0,
  roomId: '',
  roomNumber: '',
  accountNumber: '',
  error: {
    status: 0,
    type: '',
    message: '',
  },
  isSuccessGetDetailChat: undefined,
  isHaveNextPage: true,
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
      if (action.payload.length !== 0)
        return {
          ...state,
          chatContent: action.payload.reverse().concat(state.chatContent),
          isSuccessGetDetailChat: true,
        };
      else
        return {
          ...state,
          isHaveNextPage: false,
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
    case MESSAGE:
      return {
        ...state,
        chatContent: state.chatContent.concat([action.payload]),
      };
    case GET_INFO_SUCCESS:
      return {
        ...state,
        roomNumber: action.payload.room_number,
        accountNumber: action.payload.account_number,
      };
    case GET_INFO_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default detailChatReducer;
