import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Cadastro } from '../models/Cadastro';

@Injectable({
  providedIn: 'root'
})
export class ServidorCadastroService {

  baseUrl = `${environment.base_Url}/Cadastros`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cadastro[]>{
    return this.http.get<Cadastro[]>(`${this.baseUrl}`);
  }
  getById(id: number): Observable<Cadastro>{
    return this.http.get<Cadastro>(`${this.baseUrl}/${id}`);
  }
  put(id:number,cadastro: Cadastro){
    return this.http.put(`${this.baseUrl}/${id}`, cadastro);
  }
  post(cadastro: Cadastro){
    return this.http.post(`${this.baseUrl}`,cadastro);
  }
  delete(id: number){
    return this.http.delete<Cadastro>(`${this.baseUrl}/${id}`);
  }
}
