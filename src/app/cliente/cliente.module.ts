import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ClienteRoutingModule } from './cliente.route';

import { ClienteAppComponent } from './cliente.app.component';
import { ClienteDeletarComponent } from './cliente-deletar/cliente-deletar.component';
import { ClienteEditarComponent } from './cliente-editar/cliente-editar.component';
import { ClienteListarComponent } from './cliente-listar/cliente-listar.component';
import { ClienteCadastrarComponent } from './cliente-cadastrar/cliente-cadastrar.component';

import { ClienteService } from './cliente.service';

@NgModule({
  declarations: [
    ClienteAppComponent,
    ClienteDeletarComponent,
    ClienteEditarComponent,
    ClienteListarComponent,
    ClienteCadastrarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ClienteRoutingModule,
    MaterialModule
  ],
  providers: [
    ClienteService
  ]
})
export class ClienteModule { }
