import {ModuleWithProviders, NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './freamwork/commonPages/home/home.component';
import {LoginComponent} from './freamwork/commonPages/login/login.component';
import {LoginCanActivateGuard} from './freamwork/guard/loginCanActivateGuard';
import {NotFoundPageComponent} from './freamwork/commonPages/not-found-page/not-found-page.component';


const routes: Routes = [
  {path: '', redirectTo: 'pages', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundPageComponent},
];


export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
