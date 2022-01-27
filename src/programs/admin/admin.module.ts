import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { EditPasswordFormComponent } from './components/edit-password-form/edit-password-form.component';
import { NavbarModule } from '../home/components/navbar/navbar.module';


// primeng
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PasswordModule } from 'primeng/password';

//pipe
import { StatusPipePipe } from '../../app/shared/pipes/status-pipe.pipe';

@NgModule({
  declarations: [
    AdminComponent,
    EditFormComponent,
    AddFormComponent,
    EditPasswordFormComponent,
    StatusPipePipe
    // NavbarComponent
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
    RadioButtonModule,
    PasswordModule,
    NavbarModule,
    // NavbarComponent
  ],
  exports: [
    // StatusPipePipe
    // statusPipe
  ]
})
export class AdminModule { }
