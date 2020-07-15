import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DownloadComponent} from './download/download.component';
import {PagesRoutingModule} from './pages-routing.module';


@NgModule({
  declarations: [DownloadComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule {
}
