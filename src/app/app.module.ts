import { NavbarModule } from './../programs/home/components/navbar/navbar.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenubarModule } from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from 'src/programs/home/components/navbar/navbar.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './auth.guard';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    BrowserAnimationsModule,
    MenubarModule,
    TabViewModule,
    InputTextModule,
    ReactiveFormsModule,

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
