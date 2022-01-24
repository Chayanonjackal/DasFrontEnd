import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {ButtonModule} from 'primeng/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RippleModule} from 'primeng/ripple';
import {CardModule} from 'primeng/card';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import {ChartModule} from 'primeng/chart';
import {TableModule} from 'primeng/table';
import { AboutComponent } from './components/about/about.component';
import { HelpComponent } from './components/help/help.component';
import { FormComponent } from './components/form/form.component';
import {InputTextModule} from 'primeng/inputtext';
import {KeyFilterModule} from 'primeng/keyfilter';
import { ReactiveFormsModule } from '@angular/forms';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { FormsModule }   from '@angular/forms';
import {InputMaskModule} from 'primeng/inputmask';
import { PrivatepredictionComponent } from './components/privateprediction/privateprediction.component';
import {ToastModule} from 'primeng/toast';
import { PpinfoComponent } from './components/ppinfo/ppinfo.component';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DividerModule} from 'primeng/divider';

import { StudentpredictionComponent } from './components/studentprediction/studentprediction.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    DashbordComponent,
    AboutComponent,
    HelpComponent,
    FormComponent,
    PrivatepredictionComponent,
    PpinfoComponent,
    StudentpredictionComponent
  ],
  imports: [
    CommonModule,
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
    DividerModule,
    DropdownModule,
    InputNumberModule
  ]
})
export class HomeModule { }
