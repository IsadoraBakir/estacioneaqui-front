import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfFormatDirective } from './cnpj-cpf/cpf-format.directive';
import { ApenasNumerosDirective } from './apenas-numeros/apenas-numeros.directive';

@NgModule({
  declarations: [
    CpfFormatDirective, 
    ApenasNumerosDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CpfFormatDirective,
    ApenasNumerosDirective
  ]
})
export class DiretivasModule { }
