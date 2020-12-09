import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { menuItems } from '../models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  public items: MenuItem[] = menuItems;
  constructor() { }

  ngOnInit(): void {

  }

}
