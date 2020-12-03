import { MaterialModule } from './material/material.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { NavegacaoModule } from './navegacao/navegacao.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavegacaoModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
