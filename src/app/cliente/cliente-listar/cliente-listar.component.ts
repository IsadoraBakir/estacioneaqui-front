import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Cliente } from 'src/app/modelos/cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.scss']
})
export class ClienteListarComponent implements OnInit, OnDestroy {
  paginator: MatPaginator;
  sort: MatSort;
  table: MatTable<Cliente[]>;
  dataSource;
  existeClienteCadastrado = false;

  colunasExibidas = ['id', 'nome', 'cpf', 'telefone', 'acoes'];
  clientes: Cliente[];

  subscriptions: Subscription[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe);
  }

  ngOnInit(): void {
    this.clienteService.lista().pipe(take(1)).subscribe(clientes => {
      if (clientes) {
        if (clientes.length <= 0) {
          this.existeClienteCadastrado = false;
        } else {
          this.clientes = clientes;
          this.existeClienteCadastrado = true;
          this.dataSource = new MatTableDataSource(this.clientes);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        }
      }
    });
  }
}
