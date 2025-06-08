// personajes-lista.ts
import { Component, OnInit } from '@angular/core';
import { Api } from '../../service/api';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personajes-lista',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './personajes-lista.html',
  styleUrl: './personajes-lista.scss',
})
export class PersonajesLista implements OnInit {
  personajes: any[] = [];

  constructor(private api: Api) {}

  ngOnInit() {
    this.api.personajes$.subscribe((data) => {
      this.personajes = data;
    });
    
    this.api.cargarInicial();
  }
}
