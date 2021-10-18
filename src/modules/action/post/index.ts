import { createAction } from 'typesafe-actions';
import { postResponse } from '../../../models/dto/response/postResponse';
import { error } from '../../../models/error';
import { ORDER, POSTLIST, POSTLIST_FAILURE, POSTLIST_SUCCESS, TYPE } from './interface';

export const postList = createAction(POSTLIST)();
export const postListSuccess = createAction(POSTLIST_SUCCESS)<postResponse>();
export const postListFailure = createAction(POSTLIST_FAILURE)<error>();
export const setType = createAction(TYPE)<string>();
export const setOrder = createAction(ORDER)<string>();

export type postActionType =
  | ReturnType<typeof postList>
  | ReturnType<typeof postListSuccess>
  | ReturnType<typeof postListFailure>
  | ReturnType<typeof setType>
  | ReturnType<typeof setOrder>;
