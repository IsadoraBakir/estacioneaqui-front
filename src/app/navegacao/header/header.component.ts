import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  get titulo(): string {
    return this.headerService.headerInfo.titulo;
  }

  get icone(): string {
    return this.headerService.headerInfo.icone;
  }

  get routeUrl(): string {
    return this.headerService.headerInfo.routeUrl;
  }

}
