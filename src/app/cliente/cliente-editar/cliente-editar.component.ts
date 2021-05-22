import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cliente, ClienteId } from 'src/app/modelos/cliente';
import { ClienteService } from '../cliente.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ClienteEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClienteId) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe);
  }

  ngOnInit(): void {
    this.getClientePorId(this.data.id);
    console.log(typeof this.data.id)
  }

  getClientePorId(id: number) {
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
