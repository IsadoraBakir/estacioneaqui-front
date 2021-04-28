import { NavService } from './nav.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../utils/material/material.module';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    NaoEncontradoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    HomeComponent,
    NaoEncontradoComponent
  ],
  providers: [
    NavService
  ]
})
export class NavegacaoModule { }
