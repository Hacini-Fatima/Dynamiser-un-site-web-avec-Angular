import { Routes } from '@angular/router';

import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { DetailProduct } from './detail-product/detail-product';



export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'detail-product/:id', component: DetailProduct },
  { path: '**', redirectTo: '' }, // Redirige les routes non reconnues vers la page d'accueil
];