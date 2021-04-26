import { Cliente } from './../modelos/cliente';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { MaterialModule } from './../utils/material.module';
import { TestBed } from '@angular/core/testing';
import { ClienteService } from './cliente.service';

const clientesMock: Cliente[] = [
  {
    id: 1,
    nome: 'Isadora',
    cpf: '12312312323',
    telefone: '31999999999'
  },
  {
    id: 2,
    nome: 'Leandra',
    cpf: '11111111122',
    telefone: '31999999999'
  },
  {
    id: 3,
    nome: 'Carlinhos',
    cpf: '22222222211',
    telefone: '31999999999'
  },
];

const clienteMock: Cliente = {
  id: 4,
  nome: 'Isadora',
  cpf: '12312312323',
  telefone: '31222222222'
};

function criaResposta(body): Observable<any> {
  return new Observable((observer: Observer<any>) => {
    observer.next(body);
  });
}

class MockHttp {
  get(): Observable<any> {
    return criaResposta(clientesMock);
  }
}

fdescribe('O serviço ClienteService', () => {
  let service: ClienteService;
  let http: HttpClient;

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        HttpClientModule
      ],
      providers: [
        { provide: HttpClient, useClass: MockHttp}
      ]
    });
    http = bed.inject(HttpClient);
    service = bed.inject(ClienteService);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar lista de produtos', () => {
    spyOn(http, 'get').and.returnValue(criaResposta(clientesMock));

    service.lista()
      .subscribe((resultado) => {
        expect(resultado.length).toBe(3);
        console.log(resultado);
        console.log(clientesMock);
        expect(resultado).toEqual(clientesMock);
      });
  });
});
