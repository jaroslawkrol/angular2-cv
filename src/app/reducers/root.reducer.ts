import { ActionReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';
import * as fromLayout from './layout.reducer';
import * as fromMenu from './menu.reducer';
import {createSelector} from "reselect";

export interface State {
  layout: fromLayout.State;
  menu: fromMenu.State;
}

const reducers = {
  layout: fromLayout.reducer,
  menu: fromMenu.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

export const getLayoutState = (state: State) => state.layout;

export const getLayoutLeftWidth = createSelector(getLayoutState, fromLayout.getLeftWidth);
export const getLayoutRightWidth = createSelector(getLayoutState, fromLayout.getRightWidth);
export const getLayoutHeaderHeight = createSelector(getLayoutState, fromLayout.getHeaderHeight);
export const getLayoutCircleTopPosition = createSelector(getLayoutState, fromLayout.getCircleTopPosition);

export const getMenuState = (state: State) => state.menu;

export const getMenuCategories = createSelector(getMenuState, fromMenu.getCategories);
