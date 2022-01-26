import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

// directvies
import { AutofocusDirective } from 'src/app/shared/directives/autofocus.directive';

// primeng
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    LoginComponent,
    AutofocusDirective,
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
