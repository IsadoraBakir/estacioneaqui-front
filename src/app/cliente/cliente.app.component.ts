import { HeaderService } from './../navegacao/header/header.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente-root',
  templateUrl: './cliente.app.component.html'
})
export class ClienteAppComponent {

  constructor(private router: Router,
              private headerService: HeaderService) {
                headerService.headerInfo = {
                  titulo: 'Clientes',
                  icone: 'face',
                  routeUrl: '/cliente'
                };
              }

  cancela(): void {
    this.router.navigate(['/cliente']);
  }
}
