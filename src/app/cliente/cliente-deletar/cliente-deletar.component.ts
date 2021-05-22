import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cliente, ClienteId } from 'src/app/modelos/cliente';
import { ClienteService } from '../cliente.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
              private route: ActivatedRoute,
              public dialogRef: MatDialogRef<ClienteDeletarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClienteId) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe);
  }

  ngOnInit(): void {
    this.getClientePorId(this.data.id);
  }

  getClientePorId(id: number) {
    this.subscriptions.push(
      this.clienteService.listaPorId(id).subscribe((cliente: any) => {
        this.cliente = cliente.data;
      })
    );
  }

  deletaCliente(id: number): void {
    this.subscriptions.push(
      this.clienteService.deleta(id).subscribe(() => {
        this.clienteService.mostraMsg('Cliente removido com sucesso!', true);
        this.router.navigate(['/cliente']);
      })
    );
  }

  cancela(): void {
    this.router.navigate(['/cliente']);
  }

}
