import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicFormRoutingModule } from './public-form-routing.module';
import { PublicFormComponent } from './public-form.component';
import { HomeRoutingModule } from '../home/home-routing.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DividerModule } from 'primeng/divider';



@NgModule({
  declarations: [
    PublicFormComponent,

  ],
  imports: [
    CommonModule,
    PublicFormRoutingModule,
    HomeRoutingModule,
    ButtonModule,
    RippleModule,
    CardModule,
    ChartModule,
    TableModule,
    InputTextModule,
    KeyFilterModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule,
    FormsModule,
    InputMaskModule,
    ToastModule,
    DynamicDialogModule,
    ConfirmDialogModule,
    DividerModule
  ]
})
export class PublicFormModule { }
