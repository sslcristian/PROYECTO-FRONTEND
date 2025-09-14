import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // redirección al inicio
  { path: 'inicio', component: Inicio }
];
