import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginCanActivateGuard} from '../freamwork/guard/loginCanActivateGuard';
import {HomeComponent} from '../freamwork/commonPages/home/home.component';
import {DownloadComponent} from './download/download.component';

const routes: Routes = [
  {
    path: 'pages',
    component: HomeComponent,
    canActivate: [LoginCanActivateGuard],
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'download', component: DownloadComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
