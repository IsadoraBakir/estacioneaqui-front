import { CpfFormatDirective } from './utils/diretivas/cnpj-cpf/cpf-format.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { MaterialModule } from './utils/material/material.module';
import { DiretivasModule } from './utils/diretivas/diretivas.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavegacaoModule,
    BrowserAnimationsModule,
    MaterialModule,
    DiretivasModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
