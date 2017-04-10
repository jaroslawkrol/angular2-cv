import {Component, OnInit, Input, HostBinding} from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: 'circle.component.html',
  styleUrls: ['circle.component.css']
})
export class CircleComponent implements OnInit {

  @Input()
  @HostBinding("style.top")
  topPosition: string;

  constructor() { }

  ngOnInit() {
  }

}
