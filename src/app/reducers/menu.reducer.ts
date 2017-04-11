import {Action} from "@ngrx/store"
import {Category} from "../models/category";

export interface State {
  categories: Category[];
}

const initialState: State = {
  categories: []
}

export const LOAD = 'LOAD';
export const RESET = 'RESET';

export function reducer(state: any = initialState, action: Action): any {
  switch (action.type) {
    case LOAD: {
      const categories = action.payload;
      return {
        categories: [...state.categories, categories]
      }
    }

    case RESET:
      return initialState;

    default:
      return state;
  }
}

export const getCategories = (state: State) => state.categories;
