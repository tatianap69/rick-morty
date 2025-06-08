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
  // método para obtener todos los personajes
  getPersonajes() {
    return this.http.get<any>(`${this.baseUrl}`);
  }
  // método para obtener un personaje por id
  getDetallePersonaje(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  // método para obtener personajes por nombre
  getPersonajesPorNombre(nombre: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?name=${nombre}`);
  }
  // método que devuelve los personajes
  resultadosBusqueda(nombre?: string) {
    const request = nombre
      ? this.getPersonajesPorNombre(nombre)
      : this.getPersonajes();

    request.subscribe({
      next: (data) => this.personajesSubject.next(data.results),
      error: () => this.personajesSubject.next([]),
    });
  }
  // mostrar los personajes al cargar la aplicación
  cargarInicial() {
    this.getPersonajes().subscribe({
      next: (data) => this.personajesSubject.next(data.results),
      error: () => this.personajesSubject.next([]),
    });
  }
}
