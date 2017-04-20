import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import {Effect, Actions} from "@ngrx/effects";
import {CategoriesService} from "../services/categories.service";
import * as category from '../actions/category.actions';

@Injectable()
export class CategoryEffects {

  @Effect()
  getAll$: Observable<Action> = this.actions$
    .ofType(category.LOAD)
    .startWith(new category.LoadAction())
    .switchMap(() => {
      return this._categoriesService.getAllCategories()
        .map(categories => new category.LoadSuccessAction(categories))
        .catch(() => of(new category.LoadSuccessAction([])));
    });

  constructor(private actions$: Actions, private _categoriesService: CategoriesService) {
    console.log('CategoryEffects constructor')
  }
}
