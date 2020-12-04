import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// import { NgBrazil } from 'ng-brazil';

import { ClienteRoutingModule } from './cliente.route';
import { MaterialModule } from './../utils/material.module';

import { ClienteAppComponent } from './cliente.app.component';
import { ClienteDeletarComponent } from './cliente-deletar/cliente-deletar.component';
import { ClienteEditarComponent } from './cliente-editar/cliente-editar.component';
import { ClienteListarComponent } from './cliente-listar/cliente-listar.component';
import { ClienteCadastrarComponent } from './cliente-cadastrar/cliente-cadastrar.component';

import { ClienteService } from './cliente.service';
import { ClienteTelaInicialComponent } from './cliente-tela-inicial/cliente-tela-inicial.component';

@NgModule({
  declarations: [
    ClienteAppComponent,
    ClienteDeletarComponent,
    ClienteEditarComponent,
    ClienteListarComponent,
    ClienteCadastrarComponent,
    ClienteTelaInicialComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ClienteRoutingModule,
    MaterialModule,
    // NgBrazil
  ],
  providers: [
    ClienteService
  ]
})
export class ClienteModule { }
