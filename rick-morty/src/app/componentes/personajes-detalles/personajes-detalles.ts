import { Component, OnInit } from '@angular/core';
import { Api } from '../../service/api';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personajes-detalles',
  imports: [CommonModule],
  templateUrl: './personajes-detalles.html',
  styleUrl: './personajes-detalles.scss',
})
export class PersonajesDetalles implements OnInit {
  personajeDetalle: any;

  constructor(private api: Api, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      if (id) {
        this.api.getDetallePersonaje(id).subscribe({
          next: (data: any) => {
            this.personajeDetalle = data;
          },
          error: (error) => {
            console.error('Error al obtener detalles del personaje:', error);
            this.personajeDetalle = null;
          },
        });
      }
    });
  }
}
