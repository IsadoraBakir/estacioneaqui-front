import { Router } from '@angular/router';
import { ClienteCadastrarComponent } from './cliente-cadastrar/cliente-cadastrar.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cliente-tela-inicial',
  templateUrl: './cliente-tela-inicial.component.html',
  styleUrls: ['./cliente-tela-inicial.component.scss']
})
export class ClienteTelaInicialComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
  }

  abrirDialogCadastrar(): void {
    const dialogRef = this.dialog.open(ClienteCadastrarComponent, {
      width: '700px'
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   this.router.navigate(['/cliente']);
    // });
  }

  recebeOutput(resposta) {
    console.log(resposta);
  }

}
