import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cpfFormat]'
})
export class CpfFormatDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
    ) { console.log(this.el) }

  @HostListener('blur', ['$event'])
  onBlur(event: KeyboardEvent) {
    const matchValue = this.el.nativeElement.value.match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);

    if (matchValue.input === '' || matchValue.input.length !== 11) {
      this.renderer.setProperty(this.el.nativeElement, 'value', '');
      window.alert("Insira um CPF válido, por favor.")
    } else {
      this.renderer.setProperty(this.el.nativeElement, 'value', matchValue[1].concat('.').concat(matchValue[2], '.').concat(matchValue[3], '-').concat(matchValue[4]));
    }
  }

  // @HostListener('keyup', ['$event'])
  // onKeyUp(event: KeyboardEvent) {

  //   // console.log('evento:', event);
  //   // console.log('elemento:', this.el.nativeElement.value.length);

  //   // console.log(this.el.nativeElement.value.substr(0, 3).concat('.'));

  //   // this.el.nativeElement.value = this.el.nativeElement.value.substr(0, 3);

  //   // // console.log('elemento:', this.el.nativeElement.value.replace(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/));
  //   // this.value = this.el.nativeElement.value;

  //   // if (this.value.length === 11) {
  //   //   console.log(this.value[3]);
  //   // }
  //   // this.el.nativeElement.value = this.el.nativeElement.value.replace(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/);

  // }



}
