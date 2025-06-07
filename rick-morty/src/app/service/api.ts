import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
  baseUrl: string = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getPersonajes(limit: number = 20, page: number = 1): Observable<any> {
    return this.http.get(`${this.baseUrl}?limit=${limit}&page=${page}`);
  }

  getDetallePersonaje(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
