import {Component} from '@angular/core';
import {Store} from "@ngrx/store";

import {Observable} from "rxjs";
import {State} from "./reducers/step.reducer";

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

  constructor(private store: Store<State>){
    this.headerHeight = store.select('headerHeight');
    this.leftWidth = store.select('leftWidth');
    this.rightWidth = store.select('rightWidth');
  }

}
