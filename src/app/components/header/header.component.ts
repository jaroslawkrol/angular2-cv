import {Component, OnInit, Output, EventEmitter, HostBinding, Input} from '@angular/core';
import {Store} from "@ngrx/store";
import {FIRST_STEP, State} from "../reducers/step.reducer";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  @HostBinding("style.height")
  headerHeight: string;

  circleTopPosition: Observable<string>;

  constructor(private store: Store<State>) {
    this.circleTopPosition = store.select('circleTopPosition');
  }

  ngOnInit() {
  }

  toggleMove() {
    this.store.dispatch({ type: FIRST_STEP });
  }

}
