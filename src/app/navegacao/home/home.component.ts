import { HeaderData } from './../../modelos/header.data';
import { HeaderService } from './../header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headerInfo = {
      titulo: 'Início',
      icone: 'home',
      routeUrl: ''
    };
  }

  ngOnInit(): void {
  }

}
