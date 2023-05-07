import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pensamento } from '../components/pensamentos/pensamento.model';

@Injectable({
  providedIn: 'root'
})
export class PensamentosService {
  private urlAPI = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) { }

  getPensamentos(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.urlAPI);
  }

  criarPensamentos(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.urlAPI, pensamento)
  }

  editarPensamentos(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.urlAPI}/${pensamento.id}`;
    return this.http.put<Pensamento>(url, pensamento)
  }

  excluirPensamentos(id: number): Observable<Pensamento> {
    const url = `${this.urlAPI}/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  buscarPensamentoPorId(id: number): Observable<Pensamento> {
    const url = `${this.urlAPI}/${id}`;
    return this.http.get<Pensamento>(url);
  }
}
