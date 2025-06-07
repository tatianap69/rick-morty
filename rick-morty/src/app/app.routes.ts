import { Routes } from '@angular/router';
import { PersonajesLista } from './componentes/personajes-lista/personajes-lista';
import { PersonajesDetalles } from './componentes/personajes-detalles/personajes-detalles';


export const routes: Routes = [
    { path: '', component: PersonajesLista },
    { path: 'personaje/:name', component: PersonajesDetalles },
    { path: '**', component: PersonajesLista },
];
