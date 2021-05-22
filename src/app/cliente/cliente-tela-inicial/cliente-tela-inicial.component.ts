import { ClienteCadastrarComponent } from './../cliente-cadastrar/cliente-cadastrar.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cliente-tela-inicial',
  templateUrl: './cliente-tela-inicial.component.html',
  styleUrls: ['./cliente-tela-inicial.component.scss']
})
export class ClienteTelaInicialComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  abrirDialog(): void {
    const dialogRef = this.dialog.open(ClienteCadastrarComponent, {
      width: '600px'
    });
  }

}
