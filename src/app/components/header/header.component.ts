import {Component, OnInit, HostBinding, Input} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import * as fromRoot from "../../reducers/root.reducer";
import * as layout from "../../actions/layout.actions"

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  @HostBinding("style.height")
  headerHeight: string;

  circleTopPosition: Observable<string>;

  constructor(private store: Store<fromRoot.State>) {
    this.circleTopPosition = store.select(fromRoot.getLayoutCircleTopPosition);
  }

  ngOnInit() {
  }

  toggleMove() {
    this.store.dispatch(new layout.FirstStepAction());
  }

}
