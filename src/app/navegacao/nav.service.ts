import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { MenuItemInfo } from '../modelos/menu-item.info';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  // tslint:disable-next-line: variable-name
  private _menuItemInfo = new BehaviorSubject<MenuItemInfo>({
    titulo: '',
    icone: '',
    routeUrl: ''
  });

  // tslint:disable-next-line: variable-name
  private _navItems: MenuItemInfo[] = [
    {
      titulo: 'Início',
      icone: 'home',
      routeUrl: '/home'
    },
    {
      titulo: 'Clientes',
      icone: 'face',
      routeUrl: '/cliente'
    }
  ];

  constructor() { }

  get menuItemInfo(): MenuItemInfo {
    return this._menuItemInfo.value;
  }

  set menuItemInfo(menuItemInfo: MenuItemInfo) {
    this._menuItemInfo.next(menuItemInfo);
  }

  get navItems(): MenuItemInfo[] {
    return this._navItems;
  }

  // set navItems(menuItemInfo: MenuItemInfo) {
  //   this._menuItemInfo.next(menuItemInfo);
  // }
}
