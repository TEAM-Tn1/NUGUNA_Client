import { createAction } from 'typesafe-actions';
import { postResponse } from '../../../models/dto/response/postResponse';
import { error } from '../../../models/error';
import {
  ORDER,
  TYPE,
  PAGE,
  TYPECLICK,
  CARROT_POSTLIST,
  CARROT_POSTLIST_SUCCESS,
  CARROT_POSTLIST_FAILURE,
  GROUP_POSTLIST,
  GROUP_POSTLIST_SUCCESS,
  GROUP_POSTLIST_FAILURE,
} from './interface';

export const carrotPostList = createAction(CARROT_POSTLIST)();
export const carrotPostListSuccess = createAction(CARROT_POSTLIST_SUCCESS)<postResponse>();
export const carrotPostListFailure = createAction(CARROT_POSTLIST_FAILURE)<error>();
export const groupPostList = createAction(GROUP_POSTLIST)();
export const groupPostListSuccess = createAction(GROUP_POSTLIST_SUCCESS)<postResponse>();
export const groupPostListFailure = createAction(GROUP_POSTLIST_FAILURE)<error>();
export const setType = createAction(TYPE)<string>();
export const setPage = createAction(PAGE)<number>();
export const setOrder = createAction(ORDER)<{ newest: boolean; like: boolean }>();
export const setTypeClick = createAction(TYPECLICK)<{ trade: boolean; group: boolean }>();

export type postActionType =
  | ReturnType<typeof carrotPostList>
  | ReturnType<typeof carrotPostListSuccess>
  | ReturnType<typeof carrotPostListFailure>
  | ReturnType<typeof groupPostList>
  | ReturnType<typeof groupPostListSuccess>
  | ReturnType<typeof groupPostListFailure>
  | ReturnType<typeof setPage>
  | ReturnType<typeof setType>
  | ReturnType<typeof setOrder>;
