import { NavService } from '../navegacao/nav.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente-root',
  template: '<router-outlet></router-outlet>'
})
export class ClienteAppComponent {

  constructor(private router: Router,
              private navService: NavService) {
                this.navService.menuItemInfo = {
                  titulo: 'Clientes',
                  icone: 'face',
                  routeUrl: '/cliente'
                };
              }

  cancela(): void {
    this.router.navigate(['/cliente']);
  }
}
