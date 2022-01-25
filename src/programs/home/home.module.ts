import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { AboutComponent } from './components/about/about.component';
import { HelpComponent } from './components/help/help.component';
import { FormComponent } from './components/form/form.component';
import { PrivatepredictionComponent } from './components/privateprediction/privateprediction.component';
import { PpinfoComponent } from './components/ppinfo/ppinfo.component';
import { StudentpredictionComponent } from './components/studentprediction/studentprediction.component';
import { NavbarModule } from './components/navbar/navbar.module';

// primeng
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DividerModule } from 'primeng/divider';
import { AccordionModule } from 'primeng/accordion';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [
    HomeComponent,
    DashbordComponent,
    AboutComponent,
    HelpComponent,
    FormComponent,
    PrivatepredictionComponent,
    PpinfoComponent,
    StudentpredictionComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarModule,
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
    InputNumberModule,
    AccordionModule,
    ConfirmPopupModule,
    PanelModule,
  ],
})
export class HomeModule {}
