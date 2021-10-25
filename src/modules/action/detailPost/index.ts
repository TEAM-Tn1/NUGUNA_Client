import { createAction } from 'typesafe-actions';
import { detailPostResponse } from '../../../models/dto/response/detailPostResponse';
import { error } from '../../../models/error';
import { FEED_ID, GET_POST, GET_POST_FAILURE, GET_POST_SUCCESS } from './interface';

export const saveFeedId = createAction(FEED_ID)<number>();
export const getPost = createAction(GET_POST)();
export const getPostSuccess = createAction(GET_POST_SUCCESS)<detailPostResponse>();
export const getPostFailure = createAction(GET_POST_FAILURE)<error>();

export type detailPostActionType =
  | ReturnType<typeof saveFeedId>
  | ReturnType<typeof getPost>
  | ReturnType<typeof getPostSuccess>
  | ReturnType<typeof getPostFailure>;
