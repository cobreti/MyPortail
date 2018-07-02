import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users/users-list/users-list.component';

export const appRoutes : Routes = [
  {
    path: 'home',
    component: HomeComponent,
    outlet: 'main'
  },
  {
    path: 'login',
    component: LoginComponent,
    outlet: 'main'
  },
  {
    path: 'users',
    component: UsersListComponent,
    outlet: 'main'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: HomeComponent
  }
];

