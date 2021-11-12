import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';

import { ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    PasswordModule,
    ToastModule
  ]
})
export class LoginModule { }
