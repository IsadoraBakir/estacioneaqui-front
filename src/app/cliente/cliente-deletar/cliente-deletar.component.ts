import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/modelos/cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-deletar',
  templateUrl: './cliente-deletar.component.html',
  styleUrls: ['./cliente-deletar.component.scss']
})
export class ClienteDeletarComponent implements OnInit, OnDestroy {

  cliente: Cliente;

  subscriptions: Subscription[] = [];

  constructor(private clienteService: ClienteService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.subscriptions.push(
      this.clienteService.listaPorId(id).subscribe((cliente: any) => {
        this.cliente = cliente.data;
      })
    );
  }

  deletaCliente(id: string): void {
    this.subscriptions.push(
      this.clienteService.deleta(id).subscribe(() => {
        this.clienteService.mostraMsg('Cliente removido com sucesso!');
        this.router.navigate(['/cliente']);
      })
    );
  }

  cancela(): void {
    this.router.navigate(['/cliente']);
  }

}
