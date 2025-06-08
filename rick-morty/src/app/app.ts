import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './componentes/menu/menu';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Menu, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'rick-morty';
}
