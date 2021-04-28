import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[apenasNumeros]'
})
export class ApenasNumerosDirective {

  constructor(private el: ElementRef) { }

  apenasNumeros(): void {
    this.el.nativeElement.value = this.el.nativeElement.value.replace(/\D/g, '');
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
    this.apenasNumeros();
  }

}
