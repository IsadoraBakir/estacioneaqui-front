import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/modelos/cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.scss']
})
export class ClienteListarComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Cliente[]>;
  dataSource;
  existeClienteCadastrado = true;

  colunasExibidas = ['id', 'nome', 'cpf', 'telefone', 'acoes'];
  clientes: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.lista().subscribe(clientes => {
      this.clientes = clientes;
      if (this.clientes.length === 0) {
        this.existeClienteCadastrado = false;
      } else {
        this.dataSource = new MatTableDataSource(clientes);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
      }
    });
  }
}
