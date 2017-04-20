import {Component, OnInit, Input} from '@angular/core';
import {Category} from "../../models/category";
import {MdSidenavContainer, MdSidenav, MdToolbar, MdToolbarRow} from '@angular/material';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() categories: Category[];

  constructor() { }

  ngOnInit() {
  }

}
