import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';

  state: string = 'inactive';

  headerHeight: string = '50%';

  leftWidth: string = '0%';
  rightWidth: string = '0%';

  toggleMove() {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');

    this.leftWidth = (this.leftWidth === '0%' ? '28%' : '0%');
    this.rightWidth = (this.rightWidth === '0%' ? '10%' : '0%');

    this.headerHeight = (this.headerHeight === '50%' ? '38%' : '50%');

    console.log(this.state);
  }

}
