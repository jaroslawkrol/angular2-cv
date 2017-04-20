import {Component, OnInit, HostBinding, Input} from '@angular/core';
import * as fromRoot from '../../reducers/root.reducer'
import {Store} from "@ngrx/store";
import {Category} from "../../models/category";
import {Observable} from "rxjs";


@Component({
  selector: 'app-left-side',
  templateUrl: 'left-side.component.html',
  styleUrls: ['left-side.component.css']
})
export class LeftSideComponent implements OnInit {

  @Input()
  @HostBinding("style.width")
  leftWidth: string;

  categories$: Observable<Category[]>;

  constructor(private store: Store<fromRoot.State>) {
        this.categories$ = store.select(fromRoot.getMenuCategories);
  }

  ngOnInit() {
  }

}
