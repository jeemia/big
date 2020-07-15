import { DatePipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [],
  declarations: [],
  providers: [],
  exports: [
    FormsModule,
    CommonModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule,
    CheckboxModule,
    DialogModule,
    ToastModule,
    BrowserAnimationsModule
  ]
})
export class SharedBasisModule {
}
