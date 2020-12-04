import { MenuItemInfo } from './../../modelos/menu-item.info';
import { Component, OnInit } from '@angular/core';

import { NavService } from '../nav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  navList: MenuItemInfo[];

  constructor(private navService: NavService) { }

  ngOnInit(): void {
    this.navList = this.navService.navItems;
  }

}
