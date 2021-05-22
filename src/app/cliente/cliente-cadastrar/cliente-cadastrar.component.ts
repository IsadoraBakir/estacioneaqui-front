import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog'

import { Cliente } from 'src/app/modelos/cliente';

import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-cadastrar',
  templateUrl: './cliente-cadastrar.component.html',
  styleUrls: ['./cliente-cadastrar.component.scss']
})
export class ClienteCadastrarComponent implements OnInit, OnDestroy {

  cliente: Cliente;

  cadastroForm: FormGroup;

  subscriptions: Subscription[] = [];

  constructor(private clienteService: ClienteService,
    private router: Router,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ClienteCadastrarComponent>) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe);
  }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  cadastraCliente(): void {
    this.cliente = Object.assign({}, this.cliente, this.cadastroForm.value);
    this.subscriptions.push(
      this.clienteService.cadastra(this.cliente).subscribe(() => {
        this.clienteService.mostraMsg('Cliente salvo com sucesso!', false);
        this.dialogRef.close();
      })
    );
  }

  cancela(): void {
    this.dialogRef.close();
  }

}
