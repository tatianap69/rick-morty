import { Component } from '@angular/core';
import { Api } from '../../service/api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
  imports: [FormsModule],
})
export class Menu {
  nombreBusqueda: string = '';

  constructor(private api: Api) {}

  buscarPersonaje(): void {
    const nombre = this.nombreBusqueda.trim();
    if (!nombre) return;

    this.api.resultadosBusqueda(nombre);
  }
}
