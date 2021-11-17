import { createAction } from 'typesafe-actions';
import { error } from '../../../models/error';
import {
  CARROT,
  CARROT_FAILURE,
  CARROT_SUCCESS,
  DATE,
  DESCRIPTION,
  HEADCOUNT,
  PRICE,
  TAGS,
  TITLE,
  GROUP,
  GROUP_SUCCESS,
  GROUP_FAILURE,
} from './interface';

export const setTitle = createAction(TITLE)<string>();
export const setDescription = createAction(DESCRIPTION)<string>();
export const setPrice = createAction(PRICE)<number>();
export const setTags = createAction(TAGS)<Array<string>>();
export const setDate = createAction(DATE)<string>();
export const setHeadCount = createAction(HEADCOUNT)<number>();
export const carrot = createAction(CARROT)();
export const carrotSuccess = createAction(CARROT_SUCCESS)();
export const carrotFailure = createAction(CARROT_FAILURE)<error>();
export const group = createAction(GROUP)();
export const groupSuccess = createAction(GROUP_SUCCESS)();
export const groupFailure = createAction(GROUP_FAILURE)<error>();

export type writePostActionType =
  | ReturnType<typeof setTitle>
  | ReturnType<typeof setDescription>
  | ReturnType<typeof setPrice>
  | ReturnType<typeof setTags>
  | ReturnType<typeof setDate>
  | ReturnType<typeof setHeadCount>
  | ReturnType<typeof carrot>
  | ReturnType<typeof carrotSuccess>
  | ReturnType<typeof carrotFailure>
  | ReturnType<typeof group>
  | ReturnType<typeof groupSuccess>
  | ReturnType<typeof groupFailure>;
