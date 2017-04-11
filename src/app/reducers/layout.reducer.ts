import {Action} from "@ngrx/store"

export interface State {
  headerHeight: string;
  leftWidth: string;
  rightWidth: string;
  circleTopPosition: string;
}

const initialState: State = {
  headerHeight: '50%',
  leftWidth: '0%',
  rightWidth: '0%',
  circleTopPosition: 'calc(50% - 150px)'
};

const firstStepState: State = {
  headerHeight: '38%',
  leftWidth: '28%',
  rightWidth: '10%',
  circleTopPosition: '10%'
}

export const FIRST_STEP = 'FIRST_STEP';
export const RESET = 'RESET';

export function reducer(state: any = initialState, action: Action): any {
  switch (action.type) {
    case FIRST_STEP:
      return firstStepState;

    case RESET:
      return initialState;

    default:
      return state;
  }
}


export const getHeaderHeight = (state: State) => state.headerHeight;
export const getLeftWidth = (state: State) => state.leftWidth;
export const getRightWidth = (state: State) => state.rightWidth;
export const getCircleTopPosition = (state: State) => state.circleTopPosition;
