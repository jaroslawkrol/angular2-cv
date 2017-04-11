import {Action} from "@ngrx/store";

export const ActionTypes = {
  FIRST_STEP: 'FIRST_STEP',
  RESET: 'RESET'
};

export class FirstStepAction implements Action {
  type = ActionTypes.FIRST_STEP;
}

export class ResetAction implements Action {
  type = ActionTypes.RESET;
}


export type Actions
  = FirstStepAction
  | ResetAction;
