import WritePostState from './interface';
import { writePostActionType } from '../../action/writePost';
import {
  DESCRIPTION,
  PRICE,
  TAGS,
  TITLE,
  DATE,
  HEADCOUNT,
  CARROT,
  CARROT_SUCCESS,
  CARROT_FAILURE,
  GROUP,
  GROUP_SUCCESS,
  GROUP_FAILURE,
  IMG,
  FEEDID,
  PICTURE,
  PICTURE_SUCCESS,
  PICTURE_FAILURE,
} from '../../action/writePost/interface';

const initState: WritePostState = {
  title: '',
  description: '',
  price: 0,
  tags: [],
  date: '',
  headCount: 0,
  img: [],
  feedId: 0,
  error: {
    status: 0,
    type: '',
    message: '',
  },
  isSuccessSavePost: undefined,
  isSuccessSavePicture: undefined,
};

const writePostReducer = (
  state: WritePostState = initState,
  action: writePostActionType,
): WritePostState => {
  switch (action.type) {
    case TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case DESCRIPTION:
      return {
        ...state,
        description: action.payload,
      };
    case PRICE:
      return {
        ...state,
        price: action.payload,
      };
    case TAGS:
      return {
        ...state,
        tags: action.payload,
      };
    case DATE:
      return {
        ...state,
        date: action.payload,
      };
    case HEADCOUNT:
      return {
        ...state,
        headCount: action.payload,
      };
    case IMG:
      return {
        ...state,
        img: action.payload,
      };
    case FEEDID:
      return {
        ...state,
        feedId: action.payload,
      };
    case CARROT:
      return {
        ...state,
        isSuccessSavePost: undefined,
      };
    case CARROT_SUCCESS:
      return {
        ...state,
        feedId: action.payload.feed_id,
        isSuccessSavePost: true,
      };
    case CARROT_FAILURE:
      return {
        ...state,
        isSuccessSavePost: false,
      };
    case GROUP:
      return {
        ...state,
        isSuccessSavePost: undefined,
      };
    case GROUP_SUCCESS:
      return {
        ...state,
        feedId: action.payload.feed_id,
        isSuccessSavePost: true,
      };
    case GROUP_FAILURE:
      return {
        ...state,
        isSuccessSavePost: false,
      };
    case PICTURE:
      return {
        ...state,
        isSuccessSavePicture: undefined,
      };
    case PICTURE_SUCCESS:
      return {
        ...state,
        isSuccessSavePicture: true,
      };
    case PICTURE_FAILURE:
      return {
        ...state,
        isSuccessSavePicture: false,
      };
    default:
      return state;
  }
};

export default writePostReducer;
