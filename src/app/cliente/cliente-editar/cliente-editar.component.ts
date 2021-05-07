import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/modelos/cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.component.html',
  styleUrls: ['./cliente-editar.component.scss']
})
export class ClienteEditarComponent implements OnInit, OnDestroy {

  cliente: Cliente;
  edicaoForm: FormGroup;

  subscriptions: Subscription[] = [];

  constructor(private clienteService: ClienteService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.subscriptions.push(
      this.clienteService.listaPorId(id).subscribe((cliente: any) => {
        this.cliente = cliente.data;
        this.initForm();
      })
    );
  }

  initForm(): void {
    this.edicaoForm = this.fb.group({
      id: [this.cliente.id, Validators.required],
      nome: [this.cliente.nome, Validators.required],
      cpf: [this.cliente.cpf, Validators.required],
      telefone: [this.cliente.telefone, Validators.required]
    });
  }

  editaCliente(): void {
    this.subscriptions.push(
      this.clienteService.edita(this.edicaoForm.value).subscribe(() => {
        this.clienteService.mostraMsg('Cliente atualizado com sucesso!', true);
        this.router.navigate(['/cliente']);
      })
    );
  }

  cancela(): void {
    this.router.navigate(['/cliente']);
  }
}
