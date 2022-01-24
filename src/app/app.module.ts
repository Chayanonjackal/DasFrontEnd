
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './auth.guard';
import { CachingInterceptor } from './shared/interceptor/caching.interceptor';







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
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS ,
      useClass: CachingInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent],
})
export class AppModule { }
