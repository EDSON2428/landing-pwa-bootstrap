import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { HomeComponent } from './pages/home/home';   // <— ruta y nombre correctos
import { About } from './about/about';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: HomeComponent, title: 'Inicio' },  // <— usa HomeComponent
      { path: 'about', component: About, title: 'Acerca de' },
    ],
  },
];
