import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { menuItems } from '../models/menu.model';
import { BaseHref, IThemes, Themes } from '../models/themes.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  public items: MenuItem[] = menuItems;
  public themes: IThemes[] = Themes;
  private baseHref: string[] = BaseHref;
  public selectedTheme: IThemes;
  constructor() {
    this.selectedTheme = this.themes[0];
  }

  ngOnInit(): void {

  }

  public changeTheme() {
    document.querySelector('#stylesLink')?.setAttribute('href', this.baseHref[0] + this.selectedTheme.link + this.baseHref[1]);
  }

}
