import { CODE } from './interface';
import { createAction } from 'typesafe-actions';

export const setCode = createAction(CODE)<string>();

export type signupActionType = ReturnType<typeof setCode>;
