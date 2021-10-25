import { detailPostActionType } from '../../action/detailPost';
import {
  FEED_ID,
  GET_POST,
  GET_POST_FAILURE,
  GET_POST_SUCCESS,
} from '../../action/detailPost/interface';
import DetailPostState from './interface';

const initState: DetailPostState = {
  feedId: 0,
  title: '',
  description: '',
  price: 0,
  tag: [],
  medium: '',
  lastModifyDate: '',
  like: false,
  count: 0,
  headCount: 0,
  currentHeadCount: 0,
  date: '',
  userInfo: {
    writerEmail: '',
    writerName: '',
  },
  isUsedItem: false,
  isSuccessGetDetailPost: undefined,
  error: {
    status: 0,
    message: '',
    type: '',
  },
};

const detailPostReducer = (
  state: DetailPostState = initState,
  action: detailPostActionType,
): DetailPostState => {
  switch (action.type) {
    case FEED_ID:
      return {
        ...state,
        feedId: action.payload,
      };
    case GET_POST:
      return {
        ...state,
        isSuccessGetDetailPost: undefined,
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        isSuccessGetDetailPost: true,
        feedId: action.payload.feed_id,
        title: action.payload.title,
        description: action.payload.description,
        price: action.payload.price,
        tag: action.payload.tag,
        medium: action.payload.medium,
        lastModifyDate: action.payload.lastModifyDate,
        like: action.payload.like,
        count: action.payload.count,
        headCount: action.payload.head_count,
        currentHeadCount: action.payload.current_head_count,
        date: action.payload.date,
        userInfo: {
          writerEmail: action.payload.user_info.writer_email,
          writerName: action.payload.user_info.writer_name,
        },
        isUsedItem: action.payload.is_used_item,
      };
    case GET_POST_FAILURE:
      return {
        ...state,
        isSuccessGetDetailPost: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default detailPostReducer;
