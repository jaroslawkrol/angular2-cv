import {Component, OnInit, Input, HostBinding} from '@angular/core';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css']
})
export class RightSideComponent implements OnInit {

  @Input()
  @HostBinding("style.width")
  rightWidth: string;

  constructor() { }

  ngOnInit() {
  }

}
