import {Action} from "@ngrx/store"
import {Category} from "../models/category";

export interface State {
  spinner: boolean;
  categories: Category[];
}

const initialState: State = {
  categories: [],
  spinner: false
}

export const LOAD = 'LOAD';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const RESET = 'RESET';

export function reducer(state: any = initialState, action: Action): any {
  switch (action.type) {

    case LOAD: {
      return {
        categories: state.categories,
        spinner: false
      }
    }

    case LOAD_SUCCESS: {
      const categories = action.payload;
      return {
        categories: categories,
        spinner: false
      }
    }

    case RESET:
      return initialState;

    default:
      return state;
  }
}

export const getCategories = (state: State) => state.categories;
