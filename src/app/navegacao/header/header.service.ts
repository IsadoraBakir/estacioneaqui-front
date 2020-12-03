import { HeaderData } from './../../modelos/header.data';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  // tslint:disable-next-line: variable-name
  private _headerData = new BehaviorSubject<HeaderData>({
    titulo: '',
    icone: '',
    routeUrl: ''
  });

  constructor() { }

  get headerInfo(): HeaderData {
    return this._headerData.value;
  }

  set headerInfo(headerInfo: HeaderData) {
    this._headerData.next(headerInfo);
  }
}
