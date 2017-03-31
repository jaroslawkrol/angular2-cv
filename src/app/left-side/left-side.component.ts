import {Component, OnInit, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {

  @Input()
  @HostBinding("style.width")
  leftWidth: string;

  constructor() { }

  ngOnInit() {
  }

}
