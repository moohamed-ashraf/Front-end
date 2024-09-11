import { Routes } from '@angular/router';
import { HomeWrapperComponent } from './modules/home/components/home-wrapper/home-wrapper.component';
import { LoginComponent } from './modules/authentication/pages/login/login.component';
import { Component } from '@angular/core';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'auth',
    component: LoginComponent,
    loadChildren: () =>
      import('./modules/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'home',
    component: HomeWrapperComponent,
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'money-transfer',
    component: MoneyTransferComponent,
    loadChildren: () =>
      import(
        './modules/money-transfer/money-transfer/money-transfer.module'
      ).then((m) => m.MoneyTransferModule),
  },
  { path: '**', redirectTo: 'auth', pathMatch: 'full' },
];
