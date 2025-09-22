import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { HomeComponent } from './pages/home/home';   
import { About } from './about/about';
import { UiComponent } from './pages/ui/ui';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: HomeComponent, title: 'Inicio' },  
      { path: 'about', component: About, title: 'Acerca de' },
      { path: 'ui', component: UiComponent, title: 'UI · Demo' },
    ],
  },
];
