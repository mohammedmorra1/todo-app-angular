import { Routes } from '@angular/router';

import { TaskManager } from './pages/task-manager/task-manager';
import { Carrousel } from './components/carrousel/carrousel';
import { Login } from './pages/Login/Login';
import { Signup } from './pages/Signup/Signup';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: '', component: TaskManager, canActivate: [AuthGuard] },
  { path: 'carrousel', component: Carrousel, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' },
];
