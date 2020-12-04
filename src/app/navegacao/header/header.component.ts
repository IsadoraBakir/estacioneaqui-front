import { Component, OnInit } from '@angular/core';

import { NavService } from '../nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private navService: NavService) { }

  ngOnInit(): void {
  }

  get titulo(): string {
    return this.navService.menuItemInfo.titulo;
  }

  get icone(): string {
    return this.navService.menuItemInfo.icone;
  }

  get routeUrl(): string {
    return this.navService.menuItemInfo.routeUrl;
  }

}
