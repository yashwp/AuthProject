import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AuthGuard } from './gaurds';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'register', component: RegisterComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '**', component: NotFoundComponent }

];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
