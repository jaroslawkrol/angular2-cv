import {Component, OnInit, Output, EventEmitter, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  @HostBinding("style.height")
  headerHeight: string;

  topPosition: string = 'calc(50% - 150px)';

  @Output() startAnimate = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggleMove() {
    this.startAnimate.emit(true);
    this.topPosition = (this.topPosition === 'calc(50% - 150px)' ? '10%' : 'calc(50% - 150px)');
  }

}
