import { Routes } from '@angular/router';
import {PageOneComponent} from './page-one.component';
import {PageTwoComponent} from './page-two.component';

export const routes: Routes = [
  {
    path: 'page-one',
    component: PageOneComponent,
  },
  {
    path: 'page-two/:id',
    component: PageTwoComponent,
  },
  {
    path: '',
    redirectTo: 'page-one',
    pathMatch: 'full',
  }
];
