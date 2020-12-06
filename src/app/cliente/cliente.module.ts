import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);
import { RouterModule } from '@angular/router';

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
    MaterialModule
  ],
  providers: [
    ClienteService
  ]
})
export class ClienteModule { }
