import {Component} from '@angular/core';
import {Store} from "@ngrx/store";

import {Observable} from "rxjs";

import * as fromRoot from './reducers/root.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';

  headerHeight: Observable<string>;
  leftWidth: Observable<string>;
  rightWidth: Observable<string>;

  constructor(private store: Store<fromRoot.State>){
    this.headerHeight = store.select(fromRoot.getLayoutHeaderHeight);
    this.leftWidth = store.select(fromRoot.getLayoutLeftWidth);
    this.rightWidth = store.select(fromRoot.getLayoutRightWidth);
  }

}
