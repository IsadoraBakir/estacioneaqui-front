import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.component.html',
  styleUrls: ['./cliente-editar.component.scss']
})
export class ClienteEditarComponent implements OnInit {

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

  editaCliente(): void {
    this.clienteService.edita(this.cliente).subscribe(() => {
      this.clienteService.mostraMsg('Cliente atualizado com sucesso!');
      this.router.navigate(['/cliente']);
    });
  }

  cancela(): void {
    this.router.navigate(['/cliente']);
  }

}
