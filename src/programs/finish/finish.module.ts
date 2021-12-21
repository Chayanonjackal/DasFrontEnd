import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinishRoutingModule } from './finish-routing.module';
import { FinishComponent } from './finish.component';
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
    FinishComponent
  ],
  imports: [
    CommonModule,
    FinishRoutingModule,
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
export class FinishModule { }
