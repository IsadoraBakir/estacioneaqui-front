import { NavService } from '../nav.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private navService: NavService) {
    this.navService.menuItemInfo = {
      titulo: 'Início',
      icone: 'home',
      routeUrl: ''
    };
  }

  ngOnInit(): void {
  }

}
