import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';
import {ButtonModule} from 'primeng/button';
import { HomeComponent } from '../home/home.component';
import { NavbarTemplateComponent } from './components/navbar-template/navbar-template.component';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TemplateComponent,
    NavbarTemplateComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    ButtonModule,
    MenubarModule,
    HttpClientModule
  ]
})
export class TemplateModule { }
