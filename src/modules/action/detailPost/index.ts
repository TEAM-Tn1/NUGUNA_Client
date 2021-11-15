import { createAction } from 'typesafe-actions';
import { detailPostResponse } from '../../../models/dto/response/detailPostResponse';
import { error } from '../../../models/error';
import {
  FEED_ID,
  GET_POST,
  GET_POST_FAILURE,
  GET_POST_SUCCESS,
  POST_LIKE,
  POST_LIKE_DELETE,
  POST_LIKE_DELETE_FAILURE,
  POST_LIKE_DELETE_SUCCESS,
  POST_LIKE_FAILURE,
  POST_LIKE_SUCCESS,
} from './interface';

export const saveFeedId = createAction(FEED_ID)<number>();
export const getPost = createAction(GET_POST)();
export const getPostSuccess = createAction(GET_POST_SUCCESS)<detailPostResponse>();
export const getPostFailure = createAction(GET_POST_FAILURE)<error>();
export const postLike = createAction(POST_LIKE)();
export const postLikeSuccess = createAction(POST_LIKE_SUCCESS)();
export const postLikeFailure = createAction(POST_LIKE_FAILURE)<error>();
export const postLikeDelete = createAction(POST_LIKE_DELETE)();
export const postLikeDeleteSuccess = createAction(POST_LIKE_DELETE_SUCCESS)();
export const postLikeDeleteFailure = createAction(POST_LIKE_DELETE_FAILURE)<error>();

export type detailPostActionType =
  | ReturnType<typeof saveFeedId>
  | ReturnType<typeof getPost>
  | ReturnType<typeof getPostSuccess>
  | ReturnType<typeof getPostFailure>
  | ReturnType<typeof postLike>
  | ReturnType<typeof postLikeSuccess>
  | ReturnType<typeof postLikeFailure>
  | ReturnType<typeof postLikeDelete>
  | ReturnType<typeof postLikeDeleteSuccess>
  | ReturnType<typeof postLikeDeleteFailure>;
