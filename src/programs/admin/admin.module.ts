import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TableModule,
    ButtonModule,
    ToastModule
  ]
})
export class AdminModule { }
