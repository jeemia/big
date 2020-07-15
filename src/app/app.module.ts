import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './freamwork/commonPages/login/login.component';
import { HomeComponent } from './freamwork/commonPages/home/home.component';
import { TopbarComponent } from './freamwork/commonPages/topbar/topbar.component';
import { EventService } from './freamwork/commonPages/services/event.service';
import { SharedBasisModule } from './freamwork/commonModule/sharedBasis.module';
import { LoginCanActivateGuard } from './freamwork/guard/loginCanActivateGuard';
import { PagesModule } from './pages/pages.module';
import { NotFoundPageComponent } from './freamwork/commonPages/not-found-page/not-found-page.component';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TopbarComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedBasisModule,
    PagesModule
  ],
  providers: [
    EventService,
    LoginCanActivateGuard,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
