import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Cliente } from '../modelos/cliente';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urlApi = 'http://localhost:8080/cliente';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  cadastra(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.urlApi}/cadastrar`, cliente).pipe(
      map(obj => obj),
      catchError(() => this.errorHandler())
    );
  }

  lista(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlApi).pipe(
      map(obj => obj),
      catchError(() => this.errorHandler())
    );
  }

  listaPorId(id: number): Observable<Cliente> {
    const url = `${this.urlApi}/${id}`;
    return this.http.get<Cliente>(url).pipe(
      map(obj => obj),
      catchError(() => this.errorHandler())
    );
  }

  edita(cliente: Cliente): Observable<Cliente> {
    const url = `${this.urlApi}/atualizar/${cliente.id}`;
    return this.http.put<Cliente>(url, cliente).pipe(
      map(obj => obj),
      catchError(() => this.errorHandler())
    );
  }

  deleta(id: number): Observable<Cliente> {
    const url = `${this.urlApi}/${id}`;
    return this.http.delete<Cliente>(url).pipe(
      map(obj => obj),
      catchError(() => this.errorHandler())
    );
  }

  errorHandler(msg?: any): Observable<any> {
    if (msg) {
      this.mostraMsg(msg, true);
    } else {
      this.mostraMsg('Ocorreu um erro!', true);
    }
    return EMPTY;
  }

  mostraMsg(msg: string, isError: boolean): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-erro'] : ['msg-sucesso']
    });
  }
}
