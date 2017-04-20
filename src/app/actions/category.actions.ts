import {Action} from "@ngrx/store";

export const LOAD = 'LOAD';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const RESET = 'RESET';

export class LoadAction implements Action {
  readonly type = LOAD;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Category[]) { }
}

export class ResetAction implements Action {
  readonly type = RESET;

  constructor() { }
}

export type Actions
  = LoadAction
  | LoadSuccessAction
  | ResetAction;

import {Category} from "../models/category";
