import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-deletar',
  templateUrl: './cliente-deletar.component.html',
  styleUrls: ['./cliente-deletar.component.scss']
})
export class ClienteDeletarComponent implements OnInit {

  cliente: Cliente;

  constructor(private clienteService: ClienteService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.clienteService.listaPorId(id).subscribe((cliente: any) => {
      this.cliente = cliente.data;
    });
  }

  deletaCliente(id: string): void {
    this.clienteService.deleta(id).subscribe(() => {
      this.clienteService.mostraMsg('Cliente removido com sucesso!');
      this.router.navigate(['/cliente']);
    });
  }

  cancela(): void {
    this.router.navigate(['/cliente']);
  }

}
