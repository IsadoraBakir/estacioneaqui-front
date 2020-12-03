import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Cliente } from 'src/app/modelos/cliente';

import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-cadastrar',
  templateUrl: './cliente-cadastrar.component.html',
  styleUrls: ['./cliente-cadastrar.component.scss']
})
export class ClienteCadastrarComponent implements OnInit {

  cliente: Cliente;

  cadastroForm: FormGroup;

  constructor(private clienteService: ClienteService,
              private router: Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  cadastraCliente(): void {
    this.cliente = Object.assign({}, this.cliente, this.cadastroForm.value);
    this.clienteService.cadastra(this.cliente).subscribe(() => {
      this.clienteService.mostraMsg('Cliente salvo com sucesso!');
      this.router.navigate(['cliente']);
    });
  }

  cancela(): void {
    this.router.navigate(['/cliente']);
  }

  resetaFormulario(): void {
    this.cliente.nome = '';
    this.cliente.cpf = '';
    this.cliente.telefone = '';
  }

}
