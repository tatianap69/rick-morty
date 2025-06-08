import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
  baseUrl: string = 'https://rickandmortyapi.com/api/character';
  private personajesSubject = new BehaviorSubject<any[]>([]);
  personajes$ = this.personajesSubject.asObservable();

  constructor(private http: HttpClient) {}
  getPersonajes() {
    return this.http.get<any>(`${this.baseUrl}`);
  }

  getDetallePersonaje(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getPersonajesPorNombre(nombre: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?name=${nombre}`);
  }

  resultadosBusqueda(nombre?: string) {
    const request = nombre
      ? this.getPersonajesPorNombre(nombre)
      : this.getPersonajes();

    request.subscribe({
      next: (data) => this.personajesSubject.next(data.results),
      error: () => this.personajesSubject.next([]),
    });
  }

  cargarInicial() {
    this.getPersonajes().subscribe({
      next: (data) => this.personajesSubject.next(data.results),
      error: () => this.personajesSubject.next([]),
    });
  }
}
