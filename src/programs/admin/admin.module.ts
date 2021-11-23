import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import { AddFormComponent } from './components/add-form/add-form.component';



@NgModule({
  declarations: [
    AdminComponent,
    EditFormComponent,
    AddFormComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TableModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule,
    DynamicDialogModule,
    ReactiveFormsModule,
    InputTextModule,
    RadioButtonModule
  ]
})
export class AdminModule { }
